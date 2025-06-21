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

export type GameEvent = ReadyGameEvent;
