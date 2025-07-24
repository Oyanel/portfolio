import { LayerConfig, TilesetMapping } from "../types/Tilemap.type";
import { StageScene } from "./StageScene";

export class ProScene extends StageScene {
    constructor() {
        super("ProScene");
    }

    preload() {
        super.preload();
        // load the PNG files
        this.load.image("office_tiles", "game/atlases/office/tilesets/office.png");
        this.load.image("interior_tiles", "game/atlases/office/tilesets/interior.png");
        this.load.image("builder_tiles", "game/atlases/office/tilesets/builder.png");

        // load the JSON file (map)
        this.load.tilemapTiledJSON("tilemap", "game/atlases/office/office-map.json");

        // load the office object atlas
        this.load.atlas(
            "office-atlas",
            "game/atlases/office/office-atlas.png",
            "game/atlases/office/office-atlas.json",
        );
    }

    create() {
        super.create();
        const officeTilesetMappings: TilesetMapping[] = [
            { tiledTilesetName: "office", phaserImageKey: "office_tiles" },
            { tiledTilesetName: "interior", phaserImageKey: "interior_tiles" },
            { tiledTilesetName: "builder", phaserImageKey: "builder_tiles" },
        ];

        const officeLayerConfigs: LayerConfig[] = [
            { name: "floor/base", isColliding: false, renderOrder: 0 },
            { name: "floor/objects", isColliding: false, renderOrder: 1 },
            { name: "walls/walls", isColliding: true, renderOrder: 2 },
            { name: "walls/windows", isColliding: false, renderOrder: 3 },
            { name: "objects/inactive1", isColliding: false, renderOrder: 4 },
            { name: "objects/inactive2", isColliding: false, renderOrder: 5 },
            { name: "objects/interactive1", isColliding: true, renderOrder: 6 },
            { name: "objects/interactive2", isColliding: true, renderOrder: 7 },
            { name: "border", isColliding: true, renderOrder: 8 },
        ];

        const { interactiveObjects, spawnObjects, inactiveObjects } = this.createTilemapLayers(
            "tilemap", // This is the key of your Tiled JSON map
            officeTilesetMappings,
            officeLayerConfigs,
        );

        if (interactiveObjects) {
            this.createInteractiveObjects(interactiveObjects);
        }

        if (inactiveObjects) {
            this.createInactiveObjects(inactiveObjects);
        }

        if (spawnObjects) {
            this.placePlayer(spawnObjects);
        }
    }
}
