import style from "./SkillItem.module.scss";

interface Props {
    image: string;
    title: string;
    text: string;
    inverted?: boolean;
}

export const SkillItem = (props: Props) => {
    const { image, text, title, inverted } = props;

    return (
        <div className={`${style.container} ${inverted ? style.inverted : style.inverted})`}>
            <div className={style.image} />
            <div className={style.textContainer}>
                <div className={style.title}>{title}</div>
                <div className={style.text}>{text}</div>
            </div>
        </div>
    );
};
