import Phaser from "phaser";
import { Player } from "@/features/Game/game/prefab/player";
import { IInteractableSprite, InteractiveSprite } from "@/features/Game/game/prefab/InteractiveObject";
import { getTiledProperties, isTiledInteractiveObject } from "../utils/TiledObjectUtils";
import { LayerConfig, TilesetMapping } from "../types/Tilemap.type";
import { eventManager } from "@/features/Game/EventManager";
import { CommandKeyUIEvent, CommandMoveUIEvent } from "@/features/Game/game/Events.type";

export class StageScene extends Phaser.Scene {
    protected player!: Player;
    protected cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    protected map!: Phaser.Tilemaps.Tilemap;
    protected interactablesGroup!: Phaser.Physics.Arcade.Group;
    protected inactiveGroup!: Phaser.Physics.Arcade.Group;
    protected dynamicDepthGroup!: Phaser.GameObjects.Group;
    protected playerSpawnPoint: { x: number; y: number } = { x: 0, y: 0 };
    protected currentNearestInteractable: IInteractableSprite | null = null; // Type it with the interface
    private directionCommand: CommandMoveUIEvent["direction"];

    constructor(key: string) {
        super(key);
        this.playerSpawnPoint = { x: 0, y: 0 };
    }

    preload() {
        this.load.spritesheet("player_atlas", "game/atlases/player/Alex_16x16.png", {
            frameWidth: 16,
            frameHeight: 32,
        });
        this.load.spritesheet("pointer_atlas", "game/atlases/pointer/pointer-16x64.png", {
            frameWidth: 16,
            frameHeight: 16,
        });
    }

    create() {
        this.dynamicDepthGroup = this.add.group();
        this.interactablesGroup = this.physics.add.group();
        this.inactiveGroup = this.physics.add.group();

        this.player = new Player(this, this.playerSpawnPoint.x, this.playerSpawnPoint.y, "player_atlas");

        this.cursors = this.input.keyboard!.createCursorKeys();

        this.cameras.main.startFollow(this.player, true, 0.05, 0.05);

        // Set up common input for interaction
        this.input.keyboard!.on("keydown-E", this.handleInteraction, this);
        this.handleUiKeyCommands();
        this.handleUIMovementCommands();
    }

    update(): void {
        this.performDynamicDepthSorting();
        this.handlePlayerMovement();
        this.updateNearestInteractableOutline();
    }

    private handleUiKeyCommands() {
        eventManager.on("COMMAND_KEY", (event) => {
            const { key } = event as CommandKeyUIEvent;

            if (key === "E") {
                this.handleInteraction();
            }
        });
    }

    private handleUIMovementCommands(): void {
        eventManager.on("COMMAND_MOVE", (event) => {
            const { direction } = event as CommandMoveUIEvent;
            this.directionCommand = direction;
        });
    }

    private performDynamicDepthSorting(): void {
        this.dynamicDepthGroup.children.each((child) => {
            const displayObject = child as Phaser.GameObjects.Sprite;
            displayObject.setDepth(displayObject.y);

            return true;
        });
    }

    private handlePlayerMovement(): void {
        this.player.handleMovement(this.cursors, this.directionCommand);
    }

    private updateNearestInteractableOutline(): void {
        let closestInteractable: InteractiveSprite;
        let minDistance = Infinity;
        const interactionRange = 50;

        this.interactablesGroup.children.each((obj) => {
            const interactable = obj as InteractiveSprite;
            const distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, interactable.x, interactable.y);

            if (distance < interactionRange && distance < minDistance) {
                minDistance = distance;
                closestInteractable = interactable;
            }

            return true;
        });

        if (closestInteractable! && this.currentNearestInteractable !== closestInteractable) {
            if (this.currentNearestInteractable) {
                this.currentNearestInteractable.removeInteractable();
            }
            closestInteractable.setInteractable();
            this.currentNearestInteractable = closestInteractable;
        } else if (!closestInteractable! && this.currentNearestInteractable) {
            this.currentNearestInteractable.removeInteractable();
            this.currentNearestInteractable = null;
        }
    }

    private handleInteraction(): void {
        if (this.currentNearestInteractable) {
            this.currentNearestInteractable.interact();
        }
    }

    protected createTilemapLayers(
        tilemapKey: string,
        tilesetMappings: TilesetMapping[],
        layerConfigs: LayerConfig[],
    ): {
        createdLayers: Map<string, Phaser.Tilemaps.TilemapLayer>;
        interactiveObjects: Phaser.Types.Tilemaps.TiledObject[] | undefined;
        inactiveObjects: Phaser.Types.Tilemaps.TiledObject[] | undefined;
        spawnObjects: Phaser.Types.Tilemaps.TiledObject[] | undefined;
    } {
        this.map = this.make.tilemap({ key: tilemapKey });

        // Add all required tilesets to the map using their Tiled name and Phaser image key
        const phaserTilesets: Phaser.Tilemaps.Tileset[] = [];
        tilesetMappings.forEach((mapping) => {
            const tileset = this.map.addTilesetImage(mapping.tiledTilesetName, mapping.phaserImageKey);
            if (!tileset) {
                throw new Error(
                    `Failed to add tileset: Tiled name '${mapping.tiledTilesetName}', Phaser key '${mapping.phaserImageKey}'. Ensure image is loaded and Tiled name matches.`,
                );
            }
            phaserTilesets.push(tileset);
        });

        const createdLayers = new Map<string, Phaser.Tilemaps.TilemapLayer>();

        // Create tile layers based on configurations
        layerConfigs.forEach((layerConfig) => {
            // Pass all available tilesets to createLayer for maximum flexibility.
            // Phaser will automatically pick the correct tileset(s) for the layer.
            const layer = this.map.createLayer(layerConfig.name, phaserTilesets, 0, 0);

            if (!layer) {
                throw new Error(
                    `Tilemap layer '${layerConfig.name}' not found in map '${tilemapKey}' or could not be created.`,
                );
            }

            layer.setDepth(layerConfig.renderOrder);
            createdLayers.set(layerConfig.name, layer);

            if (layerConfig.isColliding) {
                layer.setCollisionByProperty({ collides: true });
                this.physics.add.collider(this.player, layer);
            }
        });

        // Adjust world bounds to map size
        this.physics.world.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
        this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);

        // Retrieve the 'Objects' layer, assuming a consistent name for object layers
        const inactiveLayer = this.map.getObjectLayer("inactive");
        const objectLayer = this.map.getObjectLayer("interactive");
        const spawnLayer = this.map.getObjectLayer("spawn");

        return {
            createdLayers,
            inactiveObjects: inactiveLayer?.objects,
            interactiveObjects: objectLayer?.objects,
            spawnObjects: spawnLayer?.objects,
        };
    }

    protected placePlayer(objectLayer: Phaser.Types.Tilemaps.TiledObject[]) {
        const playerSpawn = objectLayer?.find((obj) => obj.name === "player");

        if (playerSpawn && playerSpawn.x && playerSpawn.y) {
            this.playerSpawnPoint = {
                x: playerSpawn.x + (playerSpawn.width ?? 0) / 2,
                y: playerSpawn.y + (playerSpawn.height ?? 0) / 2,
            };
        }

        this.player.setDepth(1000); // Make sure it's in front
        this.dynamicDepthGroup.add(this.player);
        this.player.setPosition(this.playerSpawnPoint.x, this.playerSpawnPoint.y);
    }

    protected createInactiveObjects(objects: Phaser.Types.Tilemaps.TiledObject[]) {
        objects.forEach((inactiveObject) => {
            const inactiveSprite = this.physics.add.sprite(
                inactiveObject.x! + (inactiveObject.width ?? 0) / 2,
                inactiveObject.y! + (inactiveObject.height ?? 0) / 2,
                "none",
            );
            inactiveSprite.body?.setSize(inactiveObject.width ?? 0, inactiveObject.height ?? 0);
            inactiveSprite.setVisible(false);
            inactiveSprite.setPushable(false);
            inactiveSprite.setImmovable(true);

            this.inactiveGroup.add(inactiveSprite);
        });
        this.physics.add.collider(this.inactiveGroup, this.player);
    }

    protected createInteractiveObjects(objects: Phaser.Types.Tilemaps.TiledObject[]) {
        this.anims.create({
            key: "pulsing",
            frames: this.anims.generateFrameNumbers("pointer_atlas", { start: 0, end: 2 }),
            frameRate: 3,
            repeat: -1,
        });
        objects.forEach((interactiveObject) => {
            if (isTiledInteractiveObject(interactiveObject)) {
                const parsedObject = getTiledProperties(interactiveObject);
                const interactiveSprite = new InteractiveSprite(
                    this,
                    interactiveObject.x! + (interactiveObject.width ?? 0) / 2,
                    interactiveObject.y! + (interactiveObject.height ?? 0) / 2,
                    interactiveObject.height ?? 0,
                    interactiveObject.width ?? 0,
                    interactiveObject.name || "unnamed_object",
                    parsedObject,
                    parsedObject.frameName,
                );

                this.interactablesGroup.add(interactiveSprite);
                this.dynamicDepthGroup.add(interactiveSprite);
            } else {
                console.warn(
                    `Missing properties for object "${interactiveObject.name}" on layer "${interactiveObject.name}".`,
                );
            }
        });
        this.physics.add.collider(this.interactablesGroup, this.player);
    }
}
