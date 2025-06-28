import Phaser from "phaser";

export interface TiledInteractiveObject extends Phaser.Types.Tilemaps.TiledObject {
    properties: [
        { name: "dialogText"; value: string },
        { name: "dialogOptions"; value?: string[] },
        { name: "textureKey"; value: string },
        { name: "frameName"; value: string },
    ];
}

export type FlattenParsedTileObjectProperties = {
    dialogText: string;
    dialogOptions?: string[];
    textureKey: string;
    frameName: string;
};
