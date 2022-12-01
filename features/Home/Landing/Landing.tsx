import style from "./Landing.module.scss";
import { GlitchedText } from "../../../components/GlitchedText/GlitchedText";

export const Landing = () => (
    <section className={style.container}>
        <div className={style.gradient} />
        <div className={style.textContainer}>
            <div className={style.titleContainer}>
                <GlitchedText altText="こんにちは" className={style.title} headingElement="h1" text="Welcome" />
            </div>
            <h2 className={style.subTitle}>This is my website, Feel free to explore.</h2>
        </div>
    </section>
);
