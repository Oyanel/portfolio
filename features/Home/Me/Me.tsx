import { SkillItem } from "../../../components/SkillItem/SkillItem";
import style from "./Me.module.scss";

export const Me = () => (
    <section className={style.container}>
        <div className={style.textContainer}>
            <h2 className={style.title}>Hey It's me, Mar.. Therence</h2>
            <SkillItem image="test" text="text" title="Title" />
        </div>
    </section>
);
