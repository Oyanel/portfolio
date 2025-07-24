import { StageType } from "@/features/Game/UI/StageSelection/StageSelection.type";
import { Scene } from "phaser";

export type PlayUIEvent = {
    type: "PLAY";
    stage: StageType;
};

export type ExitUIEvent = {
    type: "EXIT";
};

export type UIEvent = PlayUIEvent | ExitUIEvent;

export type ReadyGameEvent = {
    type: "SCENE_READY";
    sceneInstance: Scene;
};

export type ObjectInteractableGameEvent = {
    type: "OBJECT_INTERACTABLE";
    isInteractable: boolean;
};

export type ObjectInteractionGameEvent = {
    type: "OBJECT_INTERACTION";
    objectName: string;
    dialogueKey: string;
};

export type GameEvent = ReadyGameEvent | ObjectInteractionGameEvent | ObjectInteractableGameEvent;
