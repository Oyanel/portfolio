import stage1Image from "@/public/game/stages/office_stage.png";
import { StageType } from "./StageSelection.type";

export enum EStage {
    DEFAULT = "DEFAULT",
    PRO = "PRO",
    PERSO = "PERSO",
}

export const stageList: StageType[] = [
    {
        id: EStage.PRO,
        label: "Pro",
        image: stage1Image,
        alt: "",
        scene: "ProScene",
    },
];
