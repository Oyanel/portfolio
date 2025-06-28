import { Scene } from "phaser";
import { eventManager } from "@/features/Game/EventManager";
import { PlayUIEvent } from "@/features/Game/game/Events.type";

export class Preloader extends Scene {
    constructor() {
        super("Preloader");
    }

    init() {}

    preload() {}

    create() {
        eventManager.on("PLAY", (event) => {
            const { stage } = event as PlayUIEvent;
            this.scene.start(stage.scene);
        });
    }
}
