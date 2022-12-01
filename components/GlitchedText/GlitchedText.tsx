import style from "./GlitchedText.module.scss";
import { createElement, HTMLAttributes, useState } from "react";

interface IParams extends HTMLAttributes<HTMLHeadingElement> {
    text: string;
    altText: string;
    headingElement: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const GlitchedText = (props: IParams) => {
    const { text, altText, headingElement, className, ...rest } = props;
    const [currentText, setCurrentText] = useState(altText);

    const alternateText = () => setCurrentText((prevText) => (prevText === text ? altText : text));

    return createElement(
        headingElement,
        {
            className: `${style.glitchedText} ${className ? className : ""}`,
            "data-text": currentText,
            key: text,
            ...rest,
            onClick: alternateText,
        },
        <span>{currentText}</span>
    );
};
