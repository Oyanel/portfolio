import style from "./DevGround.module.scss";
import Image from "next/image";
import background1 from "/public/images/background.jpg";

export const DevGround = () => (
        <section className={style.section}>
            <div className={style.container}>
                <div className={style.textContainer}>
                    <h2 className={style.title}>{"My dev ground"}</h2>
                    <p>
                        {"I’d like to say I am a full stack dev but I mainly create frontend apps." +
                        " Still, I do some node/java when I need to. Like a lot of devs I do a lot of things." +
                        " Though I specialize in React, I could probably build an app with any library."}
                    </p>
                    <p>
                        {" Because sometimes I want to build something, I open a few softwares and try to make it happen." +
                        " If you which to see some of my work, check this."}
                    </p>
                </div>
                <div className={style.projects}>
                    <div className={style.project}>
                        <Image alt="b1" layout="fill" objectFit="cover" src={background1} />
                        <div className={style.projectCard}>
                            <div className={style.projectCardText}>
                                <p>Mary b. Decoration</p>
                                <p>A Home designer web site</p>
                                <p>A collaboration with a UI/UX designer</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.project}>
                        <Image alt="b1" layout="fill" objectFit="cover" src={background1} />
                        <div className={style.projectCard}>
                            <p className={style.projectCardText}>Test</p>
                        </div>
                    </div>
                    <div className={style.project}>
                        <Image alt="b1" layout="fill" objectFit="cover" src={background1} />
                        <div className={style.projectCard}>
                            <p className={style.projectCardText}>Test</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)
