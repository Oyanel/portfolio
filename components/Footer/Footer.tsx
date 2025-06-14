import style from "./Footer.module.scss";
import githubIcon from "@/public/icons/github.svg";
import linkedinIcon from "@/public/icons/linkedin.svg";
import Image from "next/image";

export const Footer = () => (
    <section className={style.section}>
        <div className={style.container}>
            <div className={style.divider} />
            <div className={style.links}>
                <a href="https://github.com/Oyanel" rel="noreferrer" target="_blank">
                    <div className={style.icon}>
                        <Image alt="Github logo" sizes="(max-width: 768px) 10vw, 5vw" src={githubIcon} width={45} />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/therence-brune" rel="noreferrer" target="_blank">
                    <div className={style.icon}>
                        <Image alt="Linkedin logo" sizes="(max-width: 768px) 10vw, 5vw" src={linkedinIcon} width={45} />
                    </div>
                </a>
            </div>
            <p className={style.email}>
                Email me:{" "}
                <a href="mailto:therence.brune@gmail.com" rel="noreferrer" target="_blank">
                    therence.brune@gmail.com
                </a>
            </p>
        </div>
    </section>
);
