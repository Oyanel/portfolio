import style from "./DevGround.module.scss";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard/ProjectCard";

export const DevGround = () => {
    const [selectedCardIndex, setSelectedCardIndex] = useState<number>();
    const projectCardList = [];

    for (let i = 0; i < 3; i++) {
        projectCardList.push(
            <ProjectCard isSelected={i === selectedCardIndex} onClick={() => setSelectedCardIndex(i)} />
        );
    }

    return (
        <section className={style.section}>
            <div className={style.container}>
                <div className={style.textContainer}>
                    <h2 className={style.title}>{"My dev ground"}</h2>
                    <p>
                        {"I’d like to say I am a full stack dev but I mainly create frontend apps." +
                            " Still, I do some node/java when I need to. Like a lot of devs, I do a lot of things." +
                            " Though I specialize in React, I could probably build an app with any library."}
                    </p>
                    <p>
                        {"Because sometimes I want to build something, I open a few softwares and try to make it happen." +
                            " If you which to see some of my work, check this."}
                    </p>
                </div>
                <div className={style.projects}>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </section>
    );
};
