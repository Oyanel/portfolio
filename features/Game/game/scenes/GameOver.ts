import { eventManager } from "../../EventManager";
import { Scene } from "phaser";
import type { Cameras, GameObjects } from "phaser";

export class GameOver extends Scene {
    camera: Cameras.Scene2D.Camera | undefined;
    background: GameObjects.Image | undefined;
    gameOverText: GameObjects.Text | undefined;

    constructor() {
        super("GameOver");
    }

    create() {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0xff0000);

        this.background = this.add.image(512, 384, "background");
        this.background.setAlpha(0.5);

        this.gameOverText = this.add
            .text(512, 384, "Game Over", {
                fontFamily: "Arial Black",
                fontSize: 64,
                color: "#ffffff",
                stroke: "#000000",
                strokeThickness: 8,
                align: "center",
            })
            .setOrigin(0.5)
            .setDepth(100);

        eventManager.emit({ type: "SCENE_READY", sceneInstance: this });
    }

    changeScene() {
        this.scene.start("MainMenu");
    }
}
