import { setGlitchedInterval as setGlitchedInterval } from "../../utils/Interval";
import style from "./GlitchedText.module.scss";
import { createElement, HTMLAttributes, useCallback, useEffect, useState } from "react";

interface IParams extends HTMLAttributes<HTMLHeadingElement> {
    text: string;
    altText: string;
    headingElement: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    autoAltText?: boolean;
}

let clearTimeout: () => void;

export const GlitchedText = (props: IParams) => {
    const { text, altText, autoAltText, headingElement, className, ...rest } = props;
    const [currentText, setCurrentText] = useState(altText);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const alternateText = useCallback(() => setCurrentText((prevText) => (prevText === text ? altText : text)), []);

    useEffect(() => {
        if (autoAltText) {
            const { clear } = setGlitchedInterval(alternateText);
            clearTimeout = clear;
        }

        return () => {
            clearTimeout?.();
        };
    }, [autoAltText, alternateText]);

    return createElement(
        headingElement,
        {
            className: `${style.glitchedText} ${className ? className : ""}`,
            "data-text": currentText,
            key: text,
            onClick: autoAltText ? undefined : alternateText,
            ...rest,
        },
        <span>{currentText}</span>
    );
};
