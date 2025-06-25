// StageScene.js
import Phaser from "phaser";
import GameObject = Phaser.GameObjects.GameObject;
import { Player } from "@/features/Game/game/sprites/player";

export interface IInteractable extends Phaser.GameObjects.Sprite {
    name: string;
    interact: () => void;
    // Add other common properties or methods interactables might have
    // For example, if you add highlight/clearHighlight:
    // highlight?: () => void;
    // clearHighlight?: () => void;
}

const isInteractableObject = (object: GameObject): object is IInteractable => {
    if (object instanceof Phaser.GameObjects.Sprite && (typeof "interact") in object) {
        return true;
    }

    return false;
};

// Define a type for tileset mappings from Tiled name to Phaser key
export type TilesetMapping = {
    tiledTilesetName: string; // The name of the tileset asset within your Tiled map (.json file)
    phaserImageKey: string; // The key you used in Phaser's preload to load the image
};

// Define a type for individual layer configurations
export type LayerConfig = {
    name: string; // The name of the layer in your Tiled map
    isColliding: boolean; // Whether this layer should have collision with the player
    renderOrder: number;
};

export class StageScene extends Phaser.Scene {
    protected player!: Player;
    protected cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    protected interactables!: Phaser.GameObjects.Group; // Group of interactable objects
    protected map!: Phaser.Tilemaps.Tilemap;
    protected playerSpawnPoint: { x: number; y: number } = { x: 0, y: 0 };
    protected currentNearestInteractable: IInteractable | null = null; // Type it with the interface

    constructor(key: string) {
        super(key);
        this.playerSpawnPoint = { x: 0, y: 0 };
    }

    preload() {
        this.load.spritesheet("player_atlas", "game/Alex_16x16.png", {
            frameWidth: 16,
            frameHeight: 32,
        });
    }

    create() {
        console.log(`Creating scene: ${this.scene.key}`);

        this.player = new Player(this, this.playerSpawnPoint.x, this.playerSpawnPoint.y, "player_atlas");

        this.cursors = this.input.keyboard!.createCursorKeys();

        this.cameras.main.startFollow(this.player, true, 0.05, 0.05);

        // Set up common input for interaction
        this.input.keyboard!.on("keydown-E", this.handleInteraction, this);
    }

    update(): void {
        this.player.handleMovement(this.cursors);

        // Check for interaction proximity
        // this.checkInteractionProximity();
    }

    protected checkInteractionProximity(): void {
        // Ensure interactables group exists and has children
        if (!this.interactables || this.interactables.children.size === 0) {
            return;
        }

        let nearestInteractable: IInteractable | null = null;
        let minDistance = 100; // Max distance for interaction in pixels

        this.interactables.children.each((object) => {
            // Ensure it's a sprite and has the interact method
            if (isInteractableObject(object)) {
                const distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, object.x, object.y);
                if (distance < minDistance) {
                    minDistance = distance;
                    nearestInteractable = object;
                }
            }

            return true;
        });

        if (nearestInteractable && nearestInteractable !== this.currentNearestInteractable) {
            if (this.currentNearestInteractable) {
                // this.currentNearestInteractable.clearHighlight?.(); // Use optional chaining for optional methods
            }
            // nearestInteractable.highlight?.();
            console.log(`Near: ${nearestInteractable}`);
        } else if (!nearestInteractable && this.currentNearestInteractable) {
            // this.currentNearestInteractable.clearHighlight?.();
            console.log("No longer near anything.");
        }
        this.currentNearestInteractable = nearestInteractable;
    }

    protected handleInteraction(): void {
        if (this.currentNearestInteractable) {
            console.log(`Interacting with: ${this.currentNearestInteractable.name}`);
            this.currentNearestInteractable.interact();
        }
    }

    protected createTilemapLayers(
        tilemapKey: string,
        tilesetMappings: TilesetMapping[],
        layerConfigs: LayerConfig[],
    ): { createdLayers: Map<string, Phaser.Tilemaps.TilemapLayer>; objectLayer: Phaser.Tilemaps.ObjectLayer | null } {
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
                // Assuming you've added a custom property 'collides' (boolean) to your tiles in Tiled
                // and set it to true for collision tiles.
                layer.setCollisionByProperty({ collides: true });
                this.physics.add.collider(this.player, layer);
            }
        });

        // Adjust world bounds to map size
        this.physics.world.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
        this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);

        // Retrieve the 'Objects' layer, assuming a consistent name for object layers
        const objectLayer = this.map.getObjectLayer("Objects");

        return { createdLayers, objectLayer };
    }
}
