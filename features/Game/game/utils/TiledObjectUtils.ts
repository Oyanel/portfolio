import Phaser from "phaser";
import { FlattenParsedTileObjectProperties, type TiledInteractiveObject } from "../types/Tiled.type";

export function getTiledProperties(tiledObject: TiledInteractiveObject) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const properties: any = {};
    if (tiledObject.properties) {
        tiledObject.properties.forEach((prop) => {
            properties[prop.name] = prop.value;
        });
    }

    return properties as FlattenParsedTileObjectProperties;
}

export function isTiledInteractiveObject(object: Phaser.Types.Tilemaps.TiledObject): object is TiledInteractiveObject {
    const { textureKey } = getTiledProperties(object as TiledInteractiveObject);

    return textureKey !== undefined;
}
