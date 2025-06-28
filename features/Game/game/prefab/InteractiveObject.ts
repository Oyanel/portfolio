import Phaser from "phaser";
import { FlattenParsedTileObjectProperties } from "@/features/Game/game/types/Tiled.type";

export interface IInteractableSprite extends Phaser.Physics.Arcade.Sprite {
    name: string;
    dialogText: string;
    dialogOptions?: string[];
    interact: () => void;
    removeOutline: () => void;
    applyOutline: () => void;
}

export class InteractiveSprite extends Phaser.Physics.Arcade.Sprite implements IInteractableSprite {
    public name: string;
    public dialogText: string;
    public dialogOptions?: string[];
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
        this.setOrigin(0.5, 0.5);

        this.name = tiledObjectName;
        this.dialogText = tiledProperties.dialogText;
        this.dialogOptions = tiledProperties.dialogOptions;
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
        // This is the core interaction logic specific to THIS object type.
        // It should probably emit an event for the scene or a UI manager to handle.
        console.log(`[${this.name}] Interaction triggered!`);
        console.log(`Dialog: ${this.dialogText}`);
        if (this.dialogOptions) {
            console.log(`Options: ${this.dialogOptions}`);
        }

        // Example: Emit a custom event the scene can listen to,
        // or directly call a method on a global UI manager.
        this.scene.events.emit("interactObject", this);
    }
}
