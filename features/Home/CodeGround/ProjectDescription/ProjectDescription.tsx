import { LinkButton } from "@/components/Buttons/LinkButton/LinkButton";
import { ReactElement } from "react";
import style from "./ProjectDescription.module.scss";

interface IParams {
    title: string;
    fullText: ReactElement;
    projectLink?: string;
}

export const ProjectDescription = (props: IParams) => {
    const { projectLink, fullText, title } = props;

    return (
        <article className={style.description}>
            <h3 className={style.title}>{title}</h3>
            <div className={style.fullText}>{fullText}</div>
            {projectLink && <LinkButton className={style.button} label="Go to website" linkTo={projectLink} />}
        </article>
    );
};
