import { StageScene, IInteractable, LayerConfig, TilesetMapping } from "./StageScene";
import Phaser from "phaser";

export class ProScene extends StageScene {
    constructor() {
        super("ProScene");
    }

    preload() {
        super.preload();
        // load the PNG files
        this.load.image("office_tiles", "game/office.png");
        this.load.image("walls_tiles", "game/walls.png");

        // load the JSON file
        this.load.tilemapTiledJSON("tilemap", "game/office_map.json");
    }

    create() {
        super.create();
        const officeTilesetMappings: TilesetMapping[] = [
            { tiledTilesetName: "office", phaserImageKey: "office_tiles" },
            { tiledTilesetName: "walls", phaserImageKey: "walls_tiles" },
        ];

        const officeLayerConfigs: LayerConfig[] = [
            { name: "Floor/base", isColliding: false, renderOrder: 0 },
            { name: "Floor/floor objects", isColliding: false, renderOrder: 1 }, // Assuming floor objects are not solid obstacles
            { name: "Walls/walls", isColliding: true, renderOrder: 2 },
            { name: "Walls/windows", isColliding: false, renderOrder: 3 },
            { name: "Walls/border", isColliding: true, renderOrder: 4 },
            { name: "Walls/wall objects", isColliding: false, renderOrder: 5 }, // Assuming wall objects are decorative or interactable, not collidable walls
            { name: "Objects/objects to remove", isColliding: false, renderOrder: 6 }, // Assuming these are items to pick up, not solid obstacles
        ];

        const { objectLayer } = this.createTilemapLayers(
            "tilemap", // This is the key of your Tiled JSON map
            officeTilesetMappings,
            officeLayerConfigs,
        );

        if (objectLayer) {
            objectLayer.objects.forEach((object) => {
                let interactiveObject: IInteractable | undefined;

                // const centerX = object.x + (object.width ?? 0) / 2;
                // const centerY = object.y + (object.height ?? 0) / 2;

                const centerX = 0;
                const centerY = 0;

                if (object.name === "computer") {
                    const computerSprite = this.add.sprite(centerX, centerY, "computer") as IInteractable;
                    computerSprite.name = "Computer";
                    computerSprite.interact = () => {
                        console.log("You interact with the computer. It needs an update.");
                    };
                    interactiveObject = computerSprite;
                } else if (object.name === "desk") {
                    const deskSprite = this.add.sprite(centerX, centerY, "desk") as IInteractable;
                    deskSprite.name = "Desk";
                    deskSprite.interact = () => {
                        console.log("You look under the desk. Nothing here.");
                    };
                    interactiveObject = deskSprite;
                }

                if (interactiveObject) {
                    this.physics.world.enable(interactiveObject);
                    (interactiveObject.body as Phaser.Physics.Arcade.Body).setImmovable(true);
                    this.interactables.add(interactiveObject);
                }
            });
        }

        // Set player spawn point from Tiled, if available
        const playerSpawn = objectLayer?.objects.find((obj) => obj.name === "playerSpawn");

        if (playerSpawn && playerSpawn.x && playerSpawn.y) {
            this.playerSpawnPoint = {
                x: playerSpawn.x + (playerSpawn.width ?? 0) / 2,
                y: playerSpawn.y + (playerSpawn.height ?? 0) / 2,
            };
        }

        this.player.setDepth(7);
        this.player.setPosition(this.playerSpawnPoint.x, this.playerSpawnPoint.y);
    }
}
