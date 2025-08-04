import style from "./More.module.scss";
import sassIcon from "@/public/icons/sass.svg";
import nextIcon from "@/public/icons/nextIcon.svg";
import phaserIcon from "@/public/icons/phaserIcon.svg";
import Image from "next/image";

export const More = () => (
    <section className={style.container}>
        <div className={style.textContainer}>
            <h2 className={style.title}>{"Curious about this site ?"}</h2>
            <div className={style.skillsContainer}>
                <p>
                    {"Please enjoy the technical details of the website. " +
                        "Below you can check my tech selection, more info on the github repository"}
                </p>
                <p>
                    {"Credit to"}{" "}
                    <a href="https://codepen.io/mattgrosswork" rel="noreferrer" target="_blank">
                        Matt Gross
                    </a>
                    {" for the "}
                    <a href="https://codepen.io/mattgrosswork/pen/VwprebG" rel="noreferrer" target="_blank">
                        glitch effect.
                    </a>
                </p>
                <div className={style.techs}>
                    <div className={style.logo}>
                        <Image className={style.image} alt="Next logo" src={nextIcon} />
                    </div>
                    <div className={style.logo}>
                        <Image className={style.image} alt="sass logo" src={sassIcon} />
                    </div>
                    <div className={style.logo}>
                        <Image className={style.image} alt="phaser logo" src={phaserIcon} />
                    </div>
                </div>
            </div>
        </div>
    </section>
);
