import { StaticImageData } from "next/image";
import { EStage } from "@/features/Game/UI/StageSelection/constant";

export type StageType = {
    id: EStage;
    label: string;
    image: StaticImageData;
    alt: string;
    scene: "ProScene" | "PersoScene";
};
