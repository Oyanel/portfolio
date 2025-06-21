import { StaticImageData } from "next/image";

export type Stage = {
    id: string;
    label: string;
    image: StaticImageData;
    alt: string;
}
