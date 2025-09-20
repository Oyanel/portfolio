"use client";

import style from "./CodeGround.module.scss";
import { ComponentProps, ReactElement, useEffect, useMemo, useRef, useState } from "react";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import Image from "next/image";
import chevronLeftIcon from "@/public/icons/chevron_left.svg";
import m6plus from "@/public/images/projects/m6-plus.png";
import ryoumengoImage from "@/public/images/projects/ryoumengo.png";
import gomoImage from "@/public/images/projects/gomo.png";
import bedrockLogoImage from "@/public/images/projects/bedrockLogo.jpg";
import gomoLogoImage from "@/public/images/projects/gomoLogo.jpg";
import ryoumengoLogoImage from "@/public/images/projects/ryoumengoLogo.jpg";
import { IProjectCard } from "./ProjectCard/IProjectCard";
import { ProjectDescription } from "./ProjectDescription/ProjectDescription";
import { GlitchedText } from "@/components/GlitchedText/GlitchedText";
import classNames from "classnames";

const projectCardContentList: IProjectCard[] = [
    {
        title: "Bedrock Streaming",
        projectLink: "https://bedrockstreaming.com",
        smallText: <p>Developing a performant streaming platform</p>,
        image: m6plus,
        altImage: "Screeenshot of the m6.fr website",
        fullText: (
            <>
                <p>
                    {
                        "Bedrock Streaming is a company that creates and customizes unique streaming platforms for major broadcaster or streaming platforms like Videoland, M6+, and RTL+."
                    }
                </p>
                <p>
                    {
                        "As a frontend developer in a team of approximately 10 people, my primary responsibilities were to create new features and enhance the core web player."
                    }
                </p>
                <p>
                    {
                        "This role provided a unique and refreshing experience, as it involved working with complex systems such as video streams, SDKs, third-party integrations, and ad content, which made the frontend development a significantly more challenging and rewarding experience."
                    }
                </p>
            </>
        ),
        titleImage: bedrockLogoImage,
        altTitleImage: "The Bedrock Logo",
    },
    {
        title: "Project: Ryoumengo",
        smallText: <p>A better way to learn japanese.</p>,
        image: ryoumengoImage,
        projectLink: "https://www.figma.com/file/d4P2hxEld703X7gfnHigs1/Ryoumengo-mobile?t=LRZZC83XYZIY5dx4-1",
        altImage: "Screeenshot of the figma project of Ryoumengo",
        fullText: (
            <>
                <p>
                    {
                        "Ryoumengo is an ongoing React Native mobile application for studying Japanese with community-sourced or user-created flashcards. The platform is built with a mobile frontend and a backend API utilizing Node.js, TSOA, and MongoDB."
                    }
                </p>
                <p>
                    {
                        "Inspired by the functionality of Anki but aiming for a more modern and intuitive design, I initiated this project to build a better study tool. The development process was a valuable opportunity to master mobile development, React Native, and design principles with Figma. The project is currently on hold, with approximately 80% of the planned features completed. "
                    }
                    {"You can view the code and project progress on my "}
                    <a href="https://github.com/Ryounengo" rel="noreferrer" target="_blank">
                        Github
                    </a>
                </p>
            </>
        ),
        titleImage: ryoumengoLogoImage,
        altTitleImage: "",
    },
    {
        title: "Project: Gomo",
        projectLink: "https://gomo.ie",
        smallText: <p>Gomo, the online-only operator in Ireland</p>,
        image: gomoImage,
        altImage: "Screeenshot of gomo.ie website",
        fullText: (
            <>
                <p>
                    {
                        "Gomo is an online-only, low-cost brand from the Eir operator in Ireland. The platform's frontend is built with a combination of React and WordPress, supported by multiple backend web services."
                    }
                </p>
                <p>
                    {
                        "I joined the project after its initial build and played a key role in its continued development. My primary contribution was the implementation of a comprehensive testing suite from scratch using React Testing Library. I also maintained the application and developed several new features over its lifecycle."
                    }
                </p>
                <p>{"The Gomo platform operates in conjunction with a separate, client-only self-care application."}</p>
            </>
        ),
        titleImage: gomoLogoImage,
        altTitleImage: "The Gomo Logo",
    },
];

export const CodeGround = () => {
    const [selectedCardIndex, setSelectedCardIndex] = useState<number>();
    const [currentProjectCardContent, setCurrentProjectCardContent] = useState<IProjectCard>();
    const sectionRef = useRef<HTMLElement>(null);

    const onCardClick = () => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const projectCardList = useMemo(() => {
        const newProjectCardList: ReactElement<ComponentProps<typeof ProjectCard>>[] = [];

        for (let i = 0; i < 3; i++) {
            newProjectCardList.push(
                <ProjectCard
                    isSelected={i === selectedCardIndex}
                    key={projectCardContentList[i].title}
                    projectCard={projectCardContentList[i]}
                    onClick={() => {
                        setSelectedCardIndex(i);
                        onCardClick();
                    }}
                />,
            );
        }

        return newProjectCardList;
    }, [selectedCardIndex]);

    const selectedStyle = selectedCardIndex !== undefined ? style.isSelected : "";

    useEffect(() => {
        if (selectedCardIndex !== undefined) {
            setCurrentProjectCardContent(projectCardContentList[selectedCardIndex]);
        }
    }, [selectedCardIndex]);

    return (
        <section className={style.section} ref={sectionRef}>
            <div className={style.wrapper}>
                <div className={`${style.container} ${selectedStyle}`}>
                    <div className={`${style.textContainer} ${selectedStyle}`}>
                        <div className={style.titleContainer}>
                            <GlitchedText
                                altText="コードグラウンド"
                                className={style.title}
                                headingElement="h2"
                                text="Code ground"
                            />
                        </div>
                        <p>{"Click on a project to learn more about it"}</p>
                    </div>
                    <div className={classNames(style.projects, { [style.fullWidth]: selectedCardIndex !== undefined })}>
                        {projectCardList}
                        <button
                            aria-label="Go back to project cards"
                            className={`${style.backButton} ${selectedStyle}`}
                            onClick={() => setSelectedCardIndex(undefined)}
                        >
                            <Image alt="" height={24} src={chevronLeftIcon} width={24} />
                        </button>
                    </div>
                    <div className={classNames(style.fullText, selectedStyle)}>
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
