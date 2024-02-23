import style from "./ProjectCard.module.scss";
import Image from "next/image";
import { IProjectCard } from "./IProjectCard";

interface IParams {
    isSelected: boolean;
    onClick(): void;
    projectCard: IProjectCard;
}

export const ProjectCard = (props: IParams) => {
    const { isSelected, onClick, projectCard } = props;
    const { image, smallText, altImage, title } = projectCard;

    const selectedStyle = isSelected ? style.isSelected : "";

    return (
        <button
            aria-label={`Open to full width ${title}`}
            className={`${style.project} ${selectedStyle}`}
            onClick={onClick}
        >
            <Image
                alt={altImage}
                fill
                sizes="(max-width: 1280px) 90vw, 70vw"
                src={image}
                style={{ objectFit: "cover" }}
            />
            <div className={`${style.projectCard} ${selectedStyle}`}>
                <div className={style.projectCardText}>
                    <h3 className={style.title}>{title}</h3>
                    <div className={style.smallText}>{smallText}</div>
                </div>
            </div>
        </button>
    );
};
