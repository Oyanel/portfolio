import { LayerConfig, TilesetMapping } from "../types/Tilemap.type";
import { StageScene } from "./StageScene";

export class ProScene extends StageScene {
    constructor() {
        super("ProScene");
    }

    preload() {
        super.preload();
        // load the PNG files
        this.load.image("office_tiles", "game/office.png");
        this.load.image("walls_tiles", "game/walls.png");

        // load the JSON file (map)
        this.load.tilemapTiledJSON("tilemap", "game/office_map.json");

        // load the office object atlas
        this.load.atlas(
            "office_atlas",
            "game/atlases/office/office-atlas.png",
            "game/atlases/office/office-atlas.json",
        );
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

        const { interactiveObjects, spawnObjects } = this.createTilemapLayers(
            "tilemap", // This is the key of your Tiled JSON map
            officeTilesetMappings,
            officeLayerConfigs,
        );

        if (interactiveObjects) {
            this.createInteractiveObjects(interactiveObjects);
        }

        console.log(spawnObjects);

        if (spawnObjects) {
            this.placePlayer(spawnObjects);
        }
    }
}
