import { GameObjects, Scene } from "phaser";
import Phaser from "phaser";
import { StageType } from "@/features/Game/UI/StageSelection/StageSelection.type";
import { eventManager } from "@/features/Game/EventManager";

export abstract class StageScene extends Scene {
    background: GameObjects.Image | undefined;
    logo: GameObjects.Image | undefined;
    logoTween: Phaser.Tweens.Tween | null = null;

    create() {
        eventManager.emit({ type: "SCENE_READY", sceneInstance: this });
    }

    changeScene(stage: StageType) {
        console.log(stage);
        if (this.logoTween) {
            this.logoTween.stop();
            this.logoTween = null;
        }

        this.scene.start(stage.scene);
    }

    moveLogo(reactCallback: ({ x, y }: { x: number; y: number }) => void) {
        if (this.logoTween) {
            if (this.logoTween.isPlaying()) {
                this.logoTween.pause();
            } else {
                this.logoTween.play();
            }
        } else {
            this.logoTween = this.tweens.add({
                targets: this.logo,
                x: { value: 750, duration: 3000, ease: "Back.easeInOut" },
                y: { value: 80, duration: 1500, ease: "Sine.easeOut" },
                yoyo: true,
                repeat: -1,
                onUpdate: () => {
                    if (reactCallback && this.logo) {
                        reactCallback({
                            x: Math.floor(this.logo.x),
                            y: Math.floor(this.logo.y),
                        });
                    }
                },
            });
        }
    }
}
