import style from "./DevGround.module.scss";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import Image from "next/image";
import chevronLeftIcon from "../../../public/icons/chevron_left.svg";

export const DevGround = () => {
    const [selectedCardIndex, setSelectedCardIndex] = useState<number>();
    const projectCardList = [];

    for (let i = 0; i < 3; i++) {
        projectCardList.push(
            <ProjectCard isSelected={i === selectedCardIndex} onClick={() => setSelectedCardIndex(i)} />
        );
    }

    const selectedStyle = selectedCardIndex !== undefined ? style.isSelected : "";

    return (
        <section className={style.section}>
            <div className={style.wrapper}>
                <div className={`${style.container} ${selectedStyle}`}>
                    <div className={`${style.textContainer} ${selectedStyle}`}>
                        <h2 className={style.title}>{"My dev ground"}</h2>
                        <p>
                            {"I’d like to say I am a full stack dev but I mainly create frontend apps." +
                                " Still, I do some node/java when I need to. Like a lot of devs, I do a lot of things." +
                                " Though I specialize in React, I could probably build an app with any library."}
                        </p>
                        <p>
                            {"Because sometimes I want to build something, I open a few softwares and try to make it happen." +
                                " If you wish to see some of my work, check this."}
                        </p>
                    </div>
                    <button
                        className={`${style.backButton} ${selectedStyle}`}
                        onClick={() => setSelectedCardIndex(undefined)}
                    >
                        <Image alt="Chevron gauche" height={24} src={chevronLeftIcon} width={24} />
                    </button>
                    <div className={`${style.projects} ${selectedCardIndex !== undefined ? style.fullWidth : ""}`}>
                        {projectCardList}
                    </div>
                    <div className={`${style.fullText} ${selectedStyle}`}>
                        {"Because sometimes I want to build something, I open a few softwares and try to make it happen." +
                            " If you wish to see some of my work, check this."}
                    </div>
                </div>
            </div>
        </section>
    );
};
