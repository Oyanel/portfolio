import style from "./GlitchedText.module.scss";
import { createElement, HTMLAttributes, useCallback, useEffect, useRef, useState } from "react";

interface IParams extends HTMLAttributes<HTMLHeadingElement> {
    text: string;
    altText: string;
    headingElement: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const GlitchedText = (props: IParams) => {
    const { text, altText, headingElement, className, ...rest } = props;
    const [currentText, setCurrentText] = useState(text);
    const ref = useRef<HTMLHeadingElement>();
    const isHover = currentText === altText;

    const alternateText = useCallback(
        () => setCurrentText((prevText) => (prevText === text ? altText : text)),
        [altText, text]
    );

    useEffect(() => {
        const currentRef = ref.current;
        if (currentRef) {
            currentRef.addEventListener("mouseenter", alternateText);
            currentRef.addEventListener("mouseleave", alternateText);
        }

        return () => {
            currentRef?.removeEventListener("mouseenter", alternateText);
            currentRef?.removeEventListener("mouseleave", alternateText);
        };
    }, [alternateText]);

    return createElement(
        headingElement,
        {
            className: `${style.glitchedText} ${isHover ? style.altText : ""} ${className ? className : ""}`,
            "data-text": currentText,
            key: text,
            ref,
            ...rest,
        },
        <span>{currentText}</span>
    );
};
