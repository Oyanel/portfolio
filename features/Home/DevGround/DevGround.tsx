import style from "./DevGround.module.scss";
import { ComponentProps, ReactElement, useEffect, useMemo, useRef, useState } from "react";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import Image from "next/image";
import chevronLeftIcon from "../../../public/icons/chevron_left.svg";
import m6plus from "../../../public/images/m6-plus.png";
import ryoumengoImage from "../../../public/images/ryoumengo.png";
import gomoImage from "../../../public/images/gomo.png";
import { IProjectCard } from "./ProjectCard/IProjectCard";
import { ProjectDescription } from "./ProjectDescription/ProjectDescription";
import { GlitchedText } from "../../../components/GlitchedText/GlitchedText";

const projectCardContentList: IProjectCard[] = [
    {
        title: "Bedrock Streaming",
        projectLink: "https://bedrockstreaming.com",
        smallText: <p>Participate to create streaming champions</p>,
        image: m6plus,
        altImage: "Screeenshot of the m6.fr website",
        fullText: (
            <>
                <p>{"I had the chance to work on a big and fun project at Bedrock Streaming"}</p>
                <p>
                    {
                        "Bedrock Streaming creates streaming platforms such as Videoland, M6+, RTL+ from a unique product by a complete customization process."
                    }
                </p>
                <p>
                    {
                        "My job there was to create features and improve the web player in a team of around 10 people as a frontend developer."
                    }
                </p>
                <p>
                    {
                        "Working on a web player and all its environment (third parties, ads, media content, ...)  was really interesting and it was a refreshing experience. Playing with streams, video sdks, and complex mechanisms in a video made the frontend developer job a lot more challenging that it usually is."
                    }
                </p>
            </>
        ),
    },
    {
        title: "Ryoumengo",
        smallText: <p>This is an ongoing react native mobile app to study japanese.</p>,
        image: ryoumengoImage,
        projectLink: "https://www.figma.com/file/d4P2hxEld703X7gfnHigs1/Ryoumengo-mobile?t=LRZZC83XYZIY5dx4-1",
        altImage: "Screeenshot of the figma project of Ryoumengo",
        fullText: (
            <>
                <p>
                    {
                        "This is an ongoing react native mobile app to study japanese with flash cards made by the community or yourself."
                    }
                </p>
                <p>{"It is composed of a frontend for mobile and a backend (mongo, node, tsoa)."}</p>
                <p>{"The project is 80% completed and is on hold for now."}</p>
                <p>
                    {"I started learning japanese 3 years ago and I came across an app called Anki that is the reference for flash card studies." +
                        "It's made with the default java desktop app design that we dislike so much. I then decided that I could make a simpler, better app for my use." +
                        " This is how I started this project."}
                </p>
                <p>
                    {
                        "It was a great way to learn react native, figma and the mobile development. It's really different from the web, even though I used React Native that is based on react."
                    }
                </p>
                <p>
                    {"You can see the "}
                    <a href="https://github.com/Ryounengo" rel="noreferrer" target="_blank">
                        Ryoumengo project
                    </a>
                    {" on my github account."}
                </p>
            </>
        ),
    },
    {
        title: "Gomo",
        projectLink: "https://gomo.ie",
        smallText: <p>Gomo is an online-only, low-cost brand from the Eir operator in Ireland</p>,
        image: gomoImage,
        altImage: "Screeenshot of gomo.ie website",
        fullText: (
            <>
                <p>{"Gomo is an online-only, low-cost brand from the Eir operator in Ireland"}</p>
                <p>{"It is made with React/Wordpress for the frontend, and multiple web services for the backend."}</p>
                <p>{"I didn't have the chance to build the project from scratch but I participated actively in it."}</p>
                <p>
                    {
                        "I mainly wrote all the tests of this app as there were none at all with react testing library. I also maintained it up to date and added a few features along the years."
                    }
                </p>
                <p>{"This app lives in pair with a self-care app available for clients only."}</p>
            </>
        ),
    },
];

export const DevGround = () => {
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
                />
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
                            {"Unfortunately you won't be able to see the projects I've been working on the most as they are private projects." +
                                " Still, If you wish to see some of my work, check this."}
                        </p>
                    </div>
                    <div className={`${style.projects} ${selectedCardIndex !== undefined ? style.fullWidth : ""} `}>
                        {projectCardList}
                        <button
                            aria-label="Go back to project cards"
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
