import style from "./ProjectCard.module.scss";
import Image from "next/image";
import { IProjectCard } from "./IProjectCard";
import classNames from "classnames";

interface IParams {
    isSelected: boolean;

    onClick(): void;

    projectCard: IProjectCard;
}

export const ProjectCard = (props: IParams) => {
    const { isSelected, onClick, projectCard } = props;
    const { image, smallText, altImage, title, titleImage, altTitleImage } = projectCard;

    return (
        <button
            tabIndex={isSelected ? -1 : undefined}
            aria-label={`Open to full width ${title}`}
            className={classNames(style.project, { [style.isSelected]: isSelected })}
            onClick={onClick}
        >
            <Image
                alt={altImage}
                fill
                sizes="(max-width: 1280px) 90vw, 70vw"
                src={image}
                style={{ objectFit: "cover" }}
            />
            <Image
                className={classNames(style.imageTitle, { [style.imageTitleSelected]: isSelected })}
                alt={altTitleImage}
                fill
                sizes="(max-width: 1280px) 90vw, 70vw"
                src={titleImage}
                style={{ objectFit: "cover" }}
            />
            <div className={classNames(style.projectCard, { [style.isSelected]: isSelected })}>
                <div className={style.projectCardText}>
                    <h3 className={style.title}>{title}</h3>
                    <div className={style.smallText}>{smallText}</div>
                </div>
            </div>
        </button>
    );
};
