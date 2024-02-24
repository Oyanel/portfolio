import style from "./DevGround.module.scss";
import { ComponentProps, ReactElement, useEffect, useMemo, useRef, useState } from "react";
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
                <p>{"This web site was made in collaboration with a UI/UX designer"}</p>
                <p>{"It's a showcase website for a home designer made with Emotion/css and NextJS"}</p>
                <p>
                    {
                        "My job here was first to discuss with the designer and the client about the mockups. Once every screen was designed, I started the development."
                    }
                </p>
                <p>
                    {
                        "This project is now plugged to a back office (strapi), so they can now update some of the content themselves."
                    }
                </p>
                <p>
                    {
                        "To gain performance, it is made with NextJS SSR/SSG systems. The content appears fast and is regenerated after a period of time on a client request."
                    }
                </p>
                <p>
                    {
                        "To share my progress with the client and get reviews from the designer, I deployed the site on Netlify with CI hooks."
                    }
                </p>
                <p>{"In a second time, I rented a web server and deployed the project in production."}</p>
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
