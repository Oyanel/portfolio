"use client";

import { setGlitchedInterval as setGlitchedInterval } from "../../utils/Interval";
import { HTMLAttributes, useCallback, useEffect, useRef } from "react";
import style from "./GlitchedText.module.scss";
import classNames from "classnames";

interface IParams extends HTMLAttributes<HTMLHeadingElement> {
    text: string;
    altText: string;
    headingElement: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
    autoAltText?: boolean;
}

let clearTimeout: () => void;

function alternateText(element: HTMLHeadingElement) {
    const altText = element.getAttribute("data-alt-text");
    const text = element.getAttribute("data-text");

    element.setAttribute("data-alt-text", text as string);
    element.setAttribute("data-text", altText as string);

    if (!altText || !text) {
        return;
    }

    const innerText = element.innerText.toLowerCase() === text.toLowerCase() ? altText : text;
    element.innerHTML = `<span>${innerText}</span>`;
}

export const GlitchedText = (props: IParams) => {
    const { text, altText, autoAltText, headingElement: Heading, className, ...rest } = props;
    const ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (autoAltText && ref?.current) {
            const { clear } = setGlitchedInterval(() => alternateText(ref.current as HTMLHeadingElement));
            clearTimeout = clear;
        }

        return () => {
            clearTimeout?.();
        };
    }, [autoAltText]);

    const onClick = useCallback(() => {
        if (!autoAltText && ref?.current) {
            alternateText(ref.current);
        }
    }, [autoAltText]);

    return (
        <Heading
            className={classNames(className, style.glitchedText, { [style.clickable]: !autoAltText })}
            data-alt-text={altText}
            data-text={text}
            ref={ref}
            onClick={onClick}
            {...rest}
        >
            <span>{altText}</span>
        </Heading>
    );
};
