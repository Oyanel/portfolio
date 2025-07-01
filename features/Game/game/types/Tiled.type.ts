import Phaser from "phaser";

export interface TiledInteractiveObject extends Phaser.Types.Tilemaps.TiledObject {
    properties: [
        { name: "dialogueKey"; value: string },
        { name: "textureKey"; value: string },
        { name: "frameName"; value: string },
    ];
}

export type FlattenParsedTileObjectProperties = {
    dialogueKey: string;
    textureKey: string;
    frameName: string;
};
