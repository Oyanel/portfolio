import style from "./Landing.module.scss";
import { GlitchedText } from "../../../components/GlitchedText/GlitchedText";
import { useEffect, useRef } from "react";
import { setGlitchedInterval } from "../../../utils/Interval";
import { useIsBelowWindowWidth } from "../../../utils/breakpoints";

let clearTimeout: () => void;

const toggleBackgroundImage = (element: HTMLImageElement | null) => {
    if (element) {
        element.classList.toggle(style.lightsOn);
    }
};

export const Landing = () => {
    const ref = useRef<HTMLImageElement>(null);
    const isMobile = useIsBelowWindowWidth(550);

    useEffect(() => {
        if (ref?.current && !isMobile) {
            const { clear } = setGlitchedInterval(() => toggleBackgroundImage(ref.current));
            clearTimeout = clear;
        } else {
            clearTimeout?.();
        }

        return () => {
            clearTimeout?.();
        };
    }, [isMobile, ref]);

    return (
        <section className={style.container}>
            <div className={style.openingLayer} />
            <picture>
                <source media="(min-width: 1080px)" srcSet="/images/landing/landing-4096-2048.webp" />
                <source media="(min-width: 768px)" srcSet="/images/landing/landing-2048-1024.webp" />
                <source media="(min-width: 550px)" srcSet="/images/landing/landing-1024-512.webp" />
                <source media="(max-width: 549px)" srcSet="/images/landing/landing-549-976.webp" />
                <img
                    alt="Man in a japanese/cyberpunk style dark alley"
                    className={style.backgroundImage}
                    src="/images/landing/landing-549-976.webp"
                />
            </picture>
            {!isMobile && (
                <picture>
                    <source media="(min-width: 1080px)" srcSet="/images/landing/landing-4096-2048.webp" />
                    <source media="(min-width: 768px)" srcSet="/images/landing/landing-2048-1024.webp" />
                    <source media="(min-width: 550px)" srcSet="/images/landing/landing-1024-512.webp" />
                    <source media="(max-width: 549px)" srcSet="/images/landing/landing-549-976.webp" />
                    <img
                        alt="Man in a japanese/cyberpunk style dark alley"
                        className={`${style.backgroundImage} ${style.masked}`}
                        ref={ref}
                        src="/images/landing/landing-549-976.webp"
                    />
                </picture>
            )}
            <div className={style.gradient} />
            <div className={style.textContainer}>
                <div className={style.titleContainer}>
                    <GlitchedText
                        altText="こんにちは"
                        autoAltText
                        className={style.title}
                        headingElement="h1"
                        text="Welcome"
                    />
                </div>
                <h2 className={style.subTitle}>This is my website, Feel free to explore.</h2>
            </div>
        </section>
    );
};
