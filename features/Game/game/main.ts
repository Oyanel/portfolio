import { Boot } from "./scenes/Boot";
import { AUTO, Game, Scale } from "phaser";
import { Preloader } from "./scenes/Preloader";
import type { Types } from "phaser";
import { ProScene } from "./scenes/ProScene";
import { PersoScene } from "@/features/Game/game/scenes/PersoScene";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {
    type: AUTO,
    mode: Scale.EXPAND,
    width: 960,
    height: 640,
    parent: "game-container",
    pixelArt: true, // For Tiled maps
    physics: {
        default: "arcade",
        arcade: {
            debug: true, // Set to true for debugging physics bodies
        },
    },
    backgroundColor: "#028af8",
    scene: [Boot, Preloader, ProScene, PersoScene],
};

const StartGame = (parent: string) => {
    return new Game({ ...config, parent });
};

export default StartGame;
