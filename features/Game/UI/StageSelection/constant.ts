import stage1Image from "@/public/images/m6-plus.png";
import stage2Image from "@/public/images/gomo.png";
import { Stage } from "./StageSelection.type";

export const stageList: Stage[] = [
    {
        id: "pro",
        label: "Pro",
        image: stage1Image,
        alt: ""
    },
    {
        id: "perso",
        label: "Perso",
        image: stage2Image,
        alt: ""
    },
];