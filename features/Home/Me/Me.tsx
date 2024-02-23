import { SkillItem } from "../../../components/SkillItem/SkillItem";
import style from "./Me.module.scss";
import computerIcon from "/public/icons/computer.svg";
import tubesIcon from "/public/icons/tubes.svg";
import gameJapIcon from "/public/icons/game_jap.svg";

export const Me = () => (
    <section className={style.section}>
        <picture>
            <source media="(min-width: 1080gpx)" srcSet="/images/me/me-2048-2048.png" />
            <source media="(min-width: 600px)" srcSet="/images/me/me-1024-1024.png" />
            <source media="(max-width: 599px)" srcSet="/images/me/me-512-1024.png" />
            <img alt="Sky scrappers in the night" className={style.backgroundImage} src="/images/me/me-1024-1024.png" />
        </picture>
        <div className={style.container}>
            <div className={style.textContainer}>
                <h2 className={style.title}>{"Hey It's me, Therence"}</h2>
                <div className={style.skillsContainer}>
                    <SkillItem
                        altImage="Computer icon"
                        image={computerIcon}
                        text="I’ve been working in the web for more than 6 years. I started with PHP and then I switched to a more frontend approach in a company developing web apps in the telecom sector."
                        title="I make it"
                    />
                    <SkillItem
                        altImage="Scientific tubes icon"
                        image={tubesIcon}
                        inverted
                        text="I enjoy working on personal projects to try new techs and have a different perspective on the web development. I also tried react native, but I prefer web over mobile !"
                        title="I try it"
                    />
                    <SkillItem
                        altImage="Remote and ramen icon"
                        image={gameJapIcon}
                        text="I LOVE japanese culture (yes anime too) and video games. Even if I don’t play as much as I used to, I’m still good at Tekken or Valorant.
                     I also enjoy learning new tech stuff, especially frontend dev oriented."
                        title="I love it"
                    />
                </div>
            </div>
        </div>
    </section>
);
