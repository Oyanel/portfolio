import { SkillItem } from "../../../components/SkillItem/SkillItem";
import style from "./Me.module.scss";
import computerIcon from "/public/icons/computer.svg";
import tubesIcon from "/public/icons/tubes.svg";
import gameJapIcon from "/public/icons/game_jap.svg";

export const Me = () => (
    <section className={style.container}>
        <div className={style.textContainer}>
            <h2 className={style.title}>{"Hey It's me, Mar.. Therence"}</h2>
            <div className={style.skillsContainer}>
                <SkillItem altImage="Computer icon" image={computerIcon} text="I’ve been working in the web for more than 6 years. I started with PHP and then I switched to a more frontend approach in a company developing web apps in the telecom sector." title="I make it" />
                <SkillItem altImage="scientific tubes icon" image={tubesIcon} inverted text="I enjoy working on personal projects to try new techs and have a different perspective on the web development. I also tried react native, but I prefer web over mobile !" title="I try it" />
                <SkillItem altImage="remote and ramen icon" image={gameJapIcon} text="I LOVE japanese culture (yes anime too) and video games. Even if I don’t play as much as I used to, I’m still good at Tekken or Valorant." title="I love it" />
            </div>
        </div>
    </section>
);
