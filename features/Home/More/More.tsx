import style from "./More.module.scss";
import sassIcon from "/public/icons/sass.svg";
import nextIcon from "/public/icons/nextIcon.svg";
import Image from "next/image";

export const More = () => (
    <section className={style.container}>
        <div className={style.textContainer}>
            <h2 className={style.title}>{"Curious about this site ?"}</h2>
            <div className={style.skillsContainer}>
                <p>
                    {"I tried to make a fun site with animations but still make it performant." +
                        " I don't have that much time unfortunaltly, so I'll make updates on the long run. This is my tech selection"}
                </p>
                <div className={style.techs}>
                    <div className={style.logo}>
                        <Image alt="sass logo" layout="responsive" src={nextIcon} />
                    </div>
                    <div className={style.logo}>
                        <Image alt="sass logo" layout="responsive" src={sassIcon} />
                    </div>
                </div>
            </div>
        </div>
    </section>
);
