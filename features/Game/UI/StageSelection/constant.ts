import stage1Image from "@/public/images/m6-plus.png";
import stage2Image from "@/public/images/gomo.png";
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
        scene: "ProScene"
    },
    {
        id: EStage.PERSO,
        label: "Perso",
        image: stage2Image,
        alt: "",
        scene: "PersoScene"
    },
];
