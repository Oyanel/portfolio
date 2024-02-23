import style from "./SkillItem.module.scss";
import Image, { ImageProps } from "next/image";

interface Props {
    image: ImageProps["src"];
    title: string;
    text: string;
    altImage: string;
    inverted?: boolean;
}

export const SkillItem = (props: Props) => {
    const { image, text, title, altImage, inverted } = props;

    return (
        <div className={`${style.container} ${inverted ? style.inverted : ""}`}>
            <div className={style.image}>
                <Image alt={altImage} height={200} sizes="(max-width: 768px) 50vw, 10vw" src={image} width={200} />
            </div>
            <div className={style.textContainer}>
                <h3 className={style.title}>{title}</h3>
                <p className={style.text}>{text}</p>
            </div>
        </div>
    );
};
