import { forwardRef, ReactElement } from "react";
import style from "./SkillItem.module.scss";
import Image, { ImageProps } from "next/image";

interface Props {
    image: ImageProps["src"];
    title: string;
    text: ReactElement;
    altImage: string;
    inverted?: boolean;
    visible: boolean;
}

export const SkillItem = forwardRef<HTMLDivElement, Props>(function render(props, ref) {
    const { image, text, title, altImage, inverted, visible } = props;

    return (
        <div ref={ref}>
            <div className={`${style.container} ${inverted ? style.inverted : ""} ${visible ? style.inView : ""}`}>
                <div className={style.image}>
                    <Image alt={altImage} height={200} sizes="(max-width: 768px) 50vw, 10vw" src={image} width={200} />
                </div>
                <div className={style.textContainer}>
                    <h3 className={style.title}>{title}</h3>
                    <div>{text}</div>
                </div>
            </div>
        </div>
    );
});
