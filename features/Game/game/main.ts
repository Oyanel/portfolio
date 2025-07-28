import { Boot } from "./scenes/Boot";
import { AUTO, Game, Scale } from "phaser";
import { Preloader } from "./scenes/Preloader";
import type { Types } from "phaser";
import { ProScene } from "./scenes/ProScene";
import { PersoScene } from "@/features/Game/game/scenes/PersoScene";

const config: Types.Core.GameConfig = {
    type: AUTO,
    mode: Scale.EXPAND,
    width: Math.min(window.innerWidth, 940),
    height: Math.min(window.innerHeight * 0.9, 640),
    parent: "game-container",
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            // debug: true, // Set to true for debugging physics bodies
        },
    },
    backgroundColor: "#000000",
    scene: [Boot, Preloader, ProScene, PersoScene],
};

const StartGame = (parent: string) => {
    return new Game({ ...config, parent });
};

export default StartGame;
