import { ReactElement } from "react";
import { StaticImageData } from "next/image";

export interface IProjectCard {
    title: string;
    smallText: ReactElement;
    fullText: ReactElement;
    projectLink?: string;
    image: StaticImageData;
    altImage: string;
}
