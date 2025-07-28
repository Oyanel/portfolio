import Phaser from "phaser";
import { FlattenParsedTileObjectProperties } from "@/features/Game/game/types/Tiled.type";
import { eventManager } from "@/features/Game/EventManager";

export interface IInteractableSprite extends Phaser.Physics.Arcade.Sprite {
    name: string;
    dialogueKey: string;
    interact: () => void;
    removeInteractable: () => void;
    setInteractable: () => void;
}

export class InteractiveSprite extends Phaser.Physics.Arcade.Sprite implements IInteractableSprite {
    public name: string;
    public dialogueKey: string;
    public frameName: string;

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        height: number,
        width: number,
        tiledObjectName: string,
        tiledProperties: FlattenParsedTileObjectProperties,
        frameName: string,
    ) {
        super(scene, x, y, "pointer_atlas");

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.body?.setSize(width, height);
        this.setImmovable(true);
        this.setPushable(false);
        this.setOrigin(0.5, 0.5);
        this.setVisible(false);

        this.name = tiledObjectName;
        this.dialogueKey = tiledProperties.dialogueKey;
        this.frameName = frameName;
    }

    public setInteractable(): void {
        eventManager.emit({ type: "OBJECT_INTERACTABLE", isInteractable: true });
        this.play("pulsing");
        this.setVisible(true);
    }

    public removeInteractable(): void {
        eventManager.emit({ type: "OBJECT_INTERACTABLE", isInteractable: false });
        this.stop();
        this.setVisible(false);
    }

    public interact(): void {
        eventManager.emit({
            type: "OBJECT_INTERACTION",
            objectName: this.name,
            dialogueKey: this.dialogueKey,
        });
        this.scene.events.emit("interactObject", this);
        this.setVisible(false);
    }
}
