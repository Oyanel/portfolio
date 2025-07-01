import Phaser, { Scene } from "phaser";

enum Direction {
    DOWN = "down",
    UP = "up",
    LEFT = "left",
    RIGHT = "right",
}

enum State {
    IDLE = "idle",
    WALK = "walk",
}

export class Player extends Phaser.Physics.Arcade.Sprite {
    private speed = 200;
    private facingDirection: Direction = Direction.DOWN;

    constructor(scene: Scene, x: number, y: number, texture: string) {
        super(scene, x, y, texture);
        this.state = State.IDLE;

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.createAnimation(texture);

        this.setCollideWorldBounds(true);
        this.setOrigin(0.5, 0.5); // Center the origin for easier positioning/rotation if needed
        this.setBodySize(16, 8);
        // set the body at feet level
        this.body?.setOffset(0, 24);
        this.setScale(2, 2);

        this.play("idle-down", true);
    }

    handleMovement(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
        this.state = State.IDLE;
        this.setVelocity(0);

        if (cursors.shift.isDown) {
            this.speed = 300;
        } else {
            this.speed = 200;
        }

        if (cursors.left.isDown) {
            this.moveLeft();
        }

        if (cursors.right.isDown) {
            this.moveRight();
        }

        if (cursors.up.isDown) {
            this.moveUp();
        }

        if (cursors.down.isDown) {
            this.moveDown();
        }

        // Normalize velocity for consistent speed when moving diagonally
        // Check if player.body exists before normalizing
        if (this.body instanceof Phaser.Physics.Arcade.Body) {
            this.body.velocity.normalize().scale(this.speed);
        }

        this.play(`${this.state}-${this.facingDirection}`, true);
    }

    private createAnimation(textureKey: string) {
        const idleFrameRate = 6;

        this.scene.anims.create({
            key: "idle-down",
            frames: this.scene.anims.generateFrameNumbers(textureKey, { start: 42, end: 47 }),
            frameRate: idleFrameRate, // Single frame, so rate is irrelevant for visual
            repeat: -1, // Loop indefinitely
        });
        this.scene.anims.create({
            key: "idle-left",
            frames: this.scene.anims.generateFrameNumbers(textureKey, { start: 36, end: 41 }),
            frameRate: idleFrameRate,
            repeat: -1,
        });
        this.scene.anims.create({
            key: "idle-right",
            frames: this.scene.anims.generateFrameNumbers(textureKey, { start: 24, end: 29 }),
            frameRate: idleFrameRate,
            repeat: -1,
        });
        this.scene.anims.create({
            key: "idle-up",
            frames: this.scene.anims.generateFrameNumbers(textureKey, { start: 30, end: 35 }),
            frameRate: idleFrameRate,
            repeat: -1,
        });

        const walkFrameRate = 8; // Adjust speed of walking animation

        this.scene.anims.create({
            key: "walk-down",
            frames: this.scene.anims.generateFrameNumbers(textureKey, { start: 66, end: 71 }),
            frameRate: walkFrameRate,
            repeat: -1,
        });

        this.scene.anims.create({
            key: "walk-left",
            frames: this.scene.anims.generateFrameNumbers(textureKey, { start: 60, end: 65 }),
            frameRate: walkFrameRate,
            repeat: -1,
        });

        this.scene.anims.create({
            key: "walk-right",
            frames: this.scene.anims.generateFrameNumbers(textureKey, { start: 48, end: 53 }),
            frameRate: walkFrameRate,
            repeat: -1,
        });

        this.scene.anims.create({
            key: "walk-up",
            frames: this.scene.anims.generateFrameNumbers(textureKey, { start: 54, end: 59 }),
            frameRate: walkFrameRate,
            repeat: -1,
        });
    }

    private moveRight() {
        this.setVelocityX(this.speed);
        this.facingDirection = Direction.RIGHT;
        this.state = State.WALK;
    }

    private moveLeft() {
        this.setVelocityX(-this.speed);
        this.facingDirection = Direction.LEFT;
        this.state = State.WALK;
    }

    private moveDown() {
        this.setVelocityY(this.speed);
        this.facingDirection = Direction.DOWN;
        this.state = State.WALK;
    }

    private moveUp() {
        this.setVelocityY(-this.speed);
        this.facingDirection = Direction.UP;
        this.state = State.WALK;
    }
}
