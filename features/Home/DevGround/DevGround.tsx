import style from "./DevGround.module.scss";
import { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import Image from "next/image";
import chevronLeftIcon from "../../../public/icons/chevron_left.svg";
import marybImage from "../../../public/images/mary-b.png";
import ryoumengoImage from "../../../public/images/ryoumengo.png";
import gomoImage from "../../../public/images/gomo.png";
import { IProjectCard } from "./ProjectCard/IProjectCard";
import { ProjectDescription } from "./ProjectDescription/ProjectDescription";
import { GlitchedText } from "../../../components/GlitchedText/GlitchedText";

const projectCardContentList: IProjectCard[] = [
    {
        title: "Mary b. decoration",
        projectLink: "https://mary-b-decoration.fr",
        smallText: <p>This web site was made in collaboration with a UI/UX designer</p>,
        image: marybImage,
        altImage: "Screeenshot of mary-b-decoration.fr website",
        fullText: (
            <>
                <p>This web site was made in collaboration with a UI/UX designer</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac augue nec lacus finibus congue.
                    Ut orci orci, gravida eget ligula eu, porta porta nulla. Sed nec risus eget ex maximus commodo et
                    quis velit. Praesent tincidunt ex id elit euismod, eget cursus elit maximus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac augue nec lacus finibus congue.
                    Ut orci orci, gravida eget ligula eu, porta porta nulla. Sed nec risus eget ex maximus commodo et
                    quis velit. Praesent tincidunt ex id elit euismod, eget cursus elit maximus.
                </p>
            </>
        ),
    },
    {
        title: "Ryoumengo",
        smallText: <p>This is an ongoing react native mobile app to study japanese.</p>,
        image: ryoumengoImage,
        altImage: "Screeenshot of mary-b-decoration.fr website",
        fullText: (
            <>
                <p>This is an ongoing react native mobile app to study japanese.</p>
                <p>the project is 80% completed and is on hold for now.</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac augue nec lacus finibus congue.
                    Ut orci orci, gravida eget ligula eu, porta porta nulla. Sed nec risus eget ex maximus commodo et
                    quis velit. Praesent tincidunt ex id elit euismod, eget cursus elit maximus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac augue nec lacus finibus congue.
                    Ut orci orci, gravida eget ligula eu, porta porta nulla. Sed nec risus eget ex maximus commodo et
                    quis velit. Praesent tincidunt ex id elit euismod, eget cursus elit maximus.
                </p>
            </>
        ),
    },
    {
        title: "Gomo",
        projectLink: "https://gomo.ie",
        smallText: <p>Gomo is a online only brand from the Eir telephone/internet operator in ireland</p>,
        image: gomoImage,
        altImage: "Screeenshot of mary-b-decoration.fr website",
        fullText: (
            <>
                <p>Gomo is a online only brand from the Eir telephone/internet operator in ireland</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac augue nec lacus finibus congue.
                    Ut orci orci, gravida eget ligula eu, porta porta nulla. Sed nec risus eget ex maximus commodo et
                    quis velit. Praesent tincidunt ex id elit euismod, eget cursus elit maximus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac augue nec lacus finibus congue.
                    Ut orci orci, gravida eget ligula eu, porta porta nulla. Sed nec risus eget ex maximus commodo et
                    quis velit. Praesent tincidunt ex id elit euismod, eget cursus elit maximus.
                </p>
            </>
        ),
    },
];

export const DevGround = () => {
    const [selectedCardIndex, setSelectedCardIndex] = useState<number>();
    const [currentProjectCardContent, setCurrentProjectCardContent] = useState<IProjectCard>();
    const projectCardList = [];

    for (let i = 0; i < 3; i++) {
        projectCardList.push(
            <ProjectCard
                isSelected={i === selectedCardIndex}
                projectCard={projectCardContentList[i]}
                onClick={() => setSelectedCardIndex(i)}
            />
        );
    }

    const selectedStyle = selectedCardIndex !== undefined ? style.isSelected : "";

    useEffect(() => {
        if (selectedCardIndex !== undefined) {
            setCurrentProjectCardContent(projectCardContentList[selectedCardIndex]);
        }
    }, [selectedCardIndex]);

    return (
        <section className={style.section}>
            <div className={style.wrapper}>
                <div className={`${style.container} ${selectedStyle}`}>
                    <div className={`${style.textContainer} ${selectedStyle}`}>
                        <div className={style.titleContainer}>
                            <GlitchedText
                                altText="デブクラウンド"
                                className={style.title}
                                headingElement="h2"
                                text="My dev ground"
                            />
                        </div>
                        <p>
                            {"I’d like to say I am a full stack dev but I mainly create frontend apps." +
                                " Still, I do some node/java when I need to. Like a lot of devs, I do a lot of things." +
                                " Though I specialize in React, I could probably build an app with any library."}
                        </p>
                        <p>
                            {"Because sometimes I want to build something, I open a few apps and try to make it happen." +
                                " If you wish to see some of my work, check this."}
                        </p>
                    </div>
                    <div className={`${style.projects} ${selectedCardIndex !== undefined ? style.fullWidth : ""} `}>
                        {projectCardList}
                        <button
                            className={`${style.backButton} ${selectedStyle}`}
                            onClick={() => setSelectedCardIndex(undefined)}
                        >
                            <Image alt="Chevron gauche" height={24} src={chevronLeftIcon} width={24} />
                        </button>
                    </div>
                    <div className={`${style.fullText} ${selectedStyle}`}>
                        {currentProjectCardContent && (
                            <ProjectDescription
                                fullText={currentProjectCardContent.fullText}
                                projectLink={currentProjectCardContent.projectLink}
                                title={currentProjectCardContent.title}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
