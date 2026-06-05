"use client";

import style from "./CodeGround.module.scss";
import { useMemo, useRef, useState } from "react";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import Image from "next/image";
import chevronLeftIcon from "@/public/icons/chevron_left.svg";
import m6plus from "@/public/images/projects/m6-plus.png";
import ryoumengoImage from "@/public/images/projects/ryoumengo.png";
import itsfImage from "@/public/images/projects/itsfImage.png";
import bedrockLogoImage from "@/public/images/projects/bedrockLogo.jpg";
import itsfLogoImage from "@/public/images/projects/itsfLogo.jpg";
import ryoumengoLogoImage from "@/public/images/projects/ryoumengoLogo.jpg";
import { IProjectCard } from "./ProjectCard/IProjectCard";
import { ProjectDescription } from "./ProjectDescription/ProjectDescription";
import { GlitchedText } from "@/components/GlitchedText/GlitchedText";
import classNames from "classnames";

const projectCardContentList: IProjectCard[] = [
    {
        title: "Bedrock Streaming",
        projectLink: "https://bedrockstreaming.com",
        smallText: <p>Streaming for millions of users across Europe</p>,
        image: m6plus,
        altImage: "Screenshot of the M6+ streaming platform",
        fullText: (
            <>
                <p>
                    {
                        "Bedrock powers streaming platforms for major European broadcasters — M6+, RTL+, and Videoland — serving millions of users."
                    }
                </p>
                <p>
                    {
                        "Was the primary developer on the Chromecast application refactor, writing ~70% of the new codebase — eliminating recurring video player crashes and improving load times."
                    }
                </p>
                <p>
                    {
                        "Integrated multiple third-party SDKs and ad systems in highly constrained live environments, and participated in critical incident response to restore video playback for users in production."
                    }
                </p>
            </>
        ),
        titleImage: bedrockLogoImage,
        altTitleImage: "The Bedrock Logo",
    },
    {
        title: "IT Solutions Factory",
        projectLink: "https://www.itsf.fr",
        smallText: <p>From 45 minutes to 10 — transforming telecom operations</p>,
        image: itsfImage,
        altImage: "Screenshot of the ITSF CRM application",
        fullText: (
            <>
                <p>
                    {
                        "Built a CRM from scratch to replace a legacy system used daily by hundreds of telecom agents. The new platform reduced the average subscription time from 45 minutes to 10 minutes — a 78% reduction in agent workload."
                    }
                </p>
                <p>
                    {
                        "Designed and implemented complex business flows including multi-service subscriptions and asynchronous state management, then led a frontend architecture refactor to make the system scalable for the long term."
                    }
                </p>
                <p>
                    {
                        "Also mentored developers through code reviews and participated in technical interviews to help grow the team."
                    }
                </p>
            </>
        ),
        titleImage: itsfLogoImage,
        altTitleImage: "The IT Solutions Factory Logo",
    },
    {
        title: "Project: Ryoumengo",
        smallText: <p>A better way to learn Japanese.</p>,
        image: ryoumengoImage,
        projectLink: "https://www.figma.com/file/d4P2hxEld703X7gfnHigs1/Ryoumengo-mobile?t=LRZZC83XYZIY5dx4-1",
        altImage: "Screenshot of the Ryoumengo Figma project",
        fullText: (
            <>
                <p>
                    {
                        "Ryoumengo is a React Native mobile app for studying Japanese with community-sourced and user-created flashcards. Inspired by Anki, it aims for a more modern and intuitive design."
                    }
                </p>
                <p>
                    {
                        "Built end-to-end: mobile frontend, backend API (Node.js, TSOA, MongoDB), and UI design in Figma. The project is currently on hold at ~80% of planned features. "
                    }
                    {"Code and progress available on my "}
                    <a href="https://github.com/Ryounengo" rel="noreferrer" target="_blank">
                        Github
                    </a>
                </p>
            </>
        ),
        titleImage: ryoumengoLogoImage,
        altTitleImage: "",
    },
];

export const CodeGround = () => {
    const [selectedCardIndex, setSelectedCardIndex] = useState<number>();
    const sectionRef = useRef<HTMLElement>(null);

    const onCardClick = () => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const projectCardList = useMemo(
        () =>
            projectCardContentList.map((projectCard, i) => (
                <ProjectCard
                    isSelected={i === selectedCardIndex}
                    key={projectCard.title}
                    projectCard={projectCard}
                    onClick={() => {
                        setSelectedCardIndex(i);
                        onCardClick();
                    }}
                />
            )),
        [selectedCardIndex],
    );

    const selectedStyle = selectedCardIndex !== undefined ? style.isSelected : "";
    const currentProjectCardContent =
        selectedCardIndex !== undefined ? projectCardContentList[selectedCardIndex] : undefined;

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
