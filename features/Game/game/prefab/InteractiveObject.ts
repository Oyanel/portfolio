import Phaser from "phaser";
import { FlattenParsedTileObjectProperties } from "@/features/Game/game/types/Tiled.type";
import { eventManager } from "@/features/Game/EventManager";

export interface IInteractableSprite extends Phaser.Physics.Arcade.Sprite {
    name: string;
    dialogueKey: string;
    interact: () => void;
    removeOutline: () => void;
    applyOutline: () => void;
}

export class InteractiveSprite extends Phaser.Physics.Arcade.Sprite implements IInteractableSprite {
    public name: string;
    public dialogueKey: string;
    public frameName: string;

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        textureKey: string, // This is now the spritesheet key
        tiledObjectName: string,
        tiledProperties: FlattenParsedTileObjectProperties,
        frameName: string,
    ) {
        super(scene, x, y, textureKey);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setImmovable(true);
        this.setPushable(false);
        this.setOrigin(0.5, 0.5);

        this.name = tiledObjectName;
        this.dialogueKey = tiledProperties.dialogueKey;
        this.frameName = frameName;
    }

    public applyOutline(): void {
        this.setTint(0xff8800); // Orange tint for outline
        // TODO: Integrate a PostFXPipeline shader here for pixel-perfect outlines
        // Example: this.setPipeline('OutlinePipeline');
    }

    public removeOutline(): void {
        this.setTint(0xffffff); // Reset tint
        // TODO: Remove the PostFXPipeline here
        // Example: this.resetPipeline();
    }

    // --- Interaction Method ---
    public interact(): void {
        console.log(`[${this.name}] Interaction triggered!`);
        console.log(`Dialog: ${this.dialogueKey}`);

        eventManager.emit({
            type: "OBJECT_INTERACTION",
            objectName: this.name,
            dialogueKey: this.dialogueKey,
        });
        this.scene.events.emit("interactObject", this);
    }
}
