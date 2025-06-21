import { Boot } from "./scenes/Boot";
import { GameOver } from "./scenes/GameOver";
import { Game as MainGame } from "./scenes/Game";
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
    width: 1024,
    height: 768,
    parent: "game-container",
    backgroundColor: "#028af8",
    scene: [Boot, Preloader, ProScene, PersoScene, MainGame, GameOver],
};

const StartGame = (parent: string) => {
    return new Game({ ...config, parent });
};

export default StartGame;
