import style from "./Footer.module.scss";
import githubIcon from "/public/icons/github.svg";
import linkedinIcon from "/public/icons/linkedin.svg";
import Image from "next/image";

export const Footer = () => (
    <section className={style.section}>
        <div className={style.container}>
            <div className={style.divider} />
            <div className={style.links}>
                <a href="https://github.com/Oyanel" target="_blank">
                    <div className={style.icon}>
                        <Image alt="sass logo" layout="responsive" src={githubIcon} />
                    </div>
                </a>
                <a href="https://github.com/Oyanel" target="_blank">
                    <div className={style.icon}>
                        <Image alt="sass logo" layout="responsive" src={linkedinIcon} />
                    </div>
                </a>
            </div>
            <p className={style.email}>
                Email me:{" "}
                <a href="mailto:therence.brune@gmail.com" target="_blank">
                    therence.brune@gmail.com
                </a>
            </p>
        </div>
    </section>
);
