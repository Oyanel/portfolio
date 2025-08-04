"use client";

import { SkillItem } from "@/components/SkillItem/SkillItem";
import style from "./Me.module.scss";
import computerIcon from "@/public/icons/computer.svg";
import gearIcon from "@/public/icons/gear.svg";
import lightBulbIcon from "@/public/icons/light_bulb.svg";
import gameJapIcon from "@/public/icons/game_jap.svg";
import { IntersectionOptions, useInView } from "react-intersection-observer";

export const Me = () => {
    const intersectionOptions: IntersectionOptions = { threshold: 0.8, triggerOnce: true };
    const [computerRef, computerInView] = useInView(intersectionOptions);
    const [gearRef, gearInView] = useInView(intersectionOptions);
    const [lightbulbRef, lightBulbInView] = useInView(intersectionOptions);
    const [japGameRef, japGameInView] = useInView(intersectionOptions);

    return (
        <section className={style.section}>
            <picture>
                <source media="(min-width: 1080gpx)" srcSet="/images/me/me-2048-2048.webp" />
                <source media="(min-width: 600px)" srcSet="/images/me/me-1024-1024.webp" />
                <source media="(max-width: 599px)" srcSet="/images/me/me-512-1024.webp" />
                <img
                    alt="Sky scrappers in the night"
                    className={style.backgroundImage}
                    src="/images/me/me-1024-1024.webp"
                />
            </picture>
            <div className={style.container}>
                <div className={style.textContainer}>
                    <h2 className={style.title}>{"Who Am I"}</h2>
                    <div className={style.skillsContainer}>
                        <SkillItem
                            altImage=""
                            image={computerIcon}
                            ref={computerRef}
                            text={
                                <ul className={style.list}>
                                    <li>
                                        <strong>Experience: </strong>nearly 10 years of experience with complex,
                                        large-scale web projects.
                                    </li>
                                    <li>
                                        <strong>Focus: </strong>architecting and owning significant front-end features.
                                    </li>
                                    <li>
                                        <strong>Passion: </strong>real love for development.
                                    </li>
                                </ul>
                            }
                            title="A Senior Developer"
                            visible={computerInView}
                        />
                        <SkillItem
                            altImage=""
                            image={lightBulbIcon}
                            inverted
                            ref={lightbulbRef}
                            text={
                                <ul className={style.list}>
                                    <li>
                                        <strong>Continuous learning: </strong>experimenting with new tools and
                                        platforms.
                                    </li>
                                    <li>
                                        <strong>Broad expertise: </strong>exploring technologies from game engines and
                                        3D to backend and DevOps.
                                    </li>
                                    <li>
                                        <strong>Adaptation: </strong> creates tailored, optimal solutions for every
                                        challenge.
                                    </li>
                                </ul>
                            }
                            title="My Philosophy"
                            visible={lightBulbInView}
                        />
                        <SkillItem
                            altImage=""
                            image={gearIcon}
                            ref={gearRef}
                            text={
                                <ul className={style.list}>
                                    <li>
                                        <strong>Strategic Approach: </strong>combines a full-stack mindset with the
                                        detail-oriented eye of a designer.
                                    </li>
                                    <li>
                                        <strong>Quality First: </strong>delivers robust solutions for users and clean,
                                        maintainable code for the team.
                                    </li>
                                    <li>
                                        <strong>Productive: </strong> engaged in producing fast results
                                    </li>
                                </ul>
                            }
                            title="My Approach"
                            visible={gearInView}
                        />
                        <SkillItem
                            altImage=""
                            image={gameJapIcon}
                            inverted
                            ref={japGameRef}
                            text={
                                <ul className={style.list}>
                                    <li>
                                        <strong>Inspired By: </strong>draws inspiration from the design of video games
                                        and the rich storytelling of Japanese culture.
                                    </li>
                                    <li>
                                        <strong>Creativity: </strong>Applies a unique blend of creativity and logical
                                        thinking to every project.
                                    </li>
                                    <li>
                                        <strong>Team Work: </strong> believes a positive team environment is key to a
                                        superior product and a healthy human experience.
                                    </li>
                                </ul>
                            }
                            title="Beyond the Code"
                            visible={japGameInView}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
