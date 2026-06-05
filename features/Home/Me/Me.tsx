"use client";

import { SkillItem } from "@/components/SkillItem/SkillItem";
import style from "./Me.module.scss";
import computerIcon from "@/public/icons/computer.svg";
import gearIcon from "@/public/icons/gear.svg";
import lightBulbIcon from "@/public/icons/light_bulb.svg";
import gameJapIcon from "@/public/icons/game_jap.svg";
import { IntersectionOptions, useInView } from "react-intersection-observer";

const intersectionOptions: IntersectionOptions = { threshold: 0.8, triggerOnce: true };

export const Me = () => {
    const [computerRef, computerInView] = useInView(intersectionOptions);
    const [gearRef, gearInView] = useInView(intersectionOptions);
    const [lightbulbRef, lightBulbInView] = useInView(intersectionOptions);
    const [japGameRef, japGameInView] = useInView(intersectionOptions);

    return (
        <section className={style.section}>
            <picture>
                <source media="(min-width: 1080px)" srcSet="/images/me/me-2048-2048.webp" />
                <source media="(min-width: 600px)" srcSet="/images/me/me-1024-1024.webp" />
                <source media="(max-width: 599px)" srcSet="/images/me/me-512-1024.webp" />
                <img
                    alt="Skyscrapers at night"
                    className={style.backgroundImage}
                    src="/images/me/me-1024-1024.webp"
                />
            </picture>
            <div className={style.container}>
                <div className={style.textContainer}>
                    <h2 className={style.title}>{"Who I Am"}</h2>
                    <div className={style.skillsContainer}>
                        <SkillItem
                            altImage=""
                            image={computerIcon}
                            ref={computerRef}
                            text={
                                <ul className={style.list}>
                                    <li>
                                        <strong>Scale: </strong>built and maintained frontends used by millions of
                                        users across Europe, in streaming and telecommunications.
                                    </li>
                                    <li>
                                        <strong>Complexity: </strong>owned challenging systems — video players, SDKs,
                                        intricate business logic, and production incident response.
                                    </li>
                                    <li>
                                        <strong>Architecture: </strong>designed maintainable frontend systems that teams
                                        can actually build on top of.
                                    </li>
                                </ul>
                            }
                            title="Hard Problems, Real Solutions"
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
                                        <strong>Time saved: </strong>reduced a telecom subscription flow from 45
                                        minutes to 10 — a concrete win for hundreds of agents every day.
                                    </li>
                                    <li>
                                        <strong>Stability delivered: </strong>led the Chromecast app refactor as
                                        primary developer, writing 70% of the new codebase — eliminating video player
                                        crashes and improving load times.
                                    </li>
                                    <li>
                                        <strong>Quality built in: </strong>implemented testing suites from scratch,
                                        turning fragile codebases into reliable ones.
                                    </li>
                                </ul>
                            }
                            title="Outcomes Over Activity"
                            visible={lightBulbInView}
                        />
                        <SkillItem
                            altImage=""
                            image={gearIcon}
                            ref={gearRef}
                            text={
                                <ul className={style.list}>
                                    <li>
                                        <strong>Mentorship: </strong>guided junior and mid-level developers through
                                        code reviews and pair programming.
                                    </li>
                                    <li>
                                        <strong>Decisions: </strong>drove frontend architecture choices that shaped
                                        how teams worked for years to come.
                                    </li>
                                    <li>
                                        <strong>Hiring: </strong>participated in technical interviews to help build
                                        stronger, more capable teams.
                                    </li>
                                </ul>
                            }
                            title="Technical Leadership"
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
                                        <strong>Inspired by: </strong>the design of video games and the rich
                                        storytelling of Japanese culture.
                                    </li>
                                    <li>
                                        <strong>Creativity: </strong>brings an inventive and analytical mindset
                                        to every project.
                                    </li>
                                    <li>
                                        <strong>Teamwork: </strong>believes a positive team environment is key to a
                                        better product and a better human experience.
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
