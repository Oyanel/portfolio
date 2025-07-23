// Define a type for tileset mappings from Tiled name to Phaser key
export type TilesetMapping = {
    tiledTilesetName: string;
    phaserImageKey: string;
};

// Define a type for individual layer configurations
export type LayerConfig = {
    name: string; // The name of the layer in your Tiled map
    isColliding: boolean; // Whether this layer should have collision with the player
    customCollision?: boolean;
    renderOrder: number;
};
