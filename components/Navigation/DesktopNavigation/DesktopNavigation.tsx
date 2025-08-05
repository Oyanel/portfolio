"use client";

import Link from "next/link";
import style from "./DesktopNavigation.module.scss";
import { hackedLink, navigationLinks } from "@/components/Navigation/constant";
import { GlitchedText } from "@/components/GlitchedText/GlitchedText";
import { useContext } from "react";
import { HackingContext } from "@/context/Hacking/HackingContext";

export const DesktopNavigation = () => {
    const { isHacked } = useContext(HackingContext);

    return (
        <nav className={style.container}>
            <ul className={style.linkList}>
                <li className={style.home}>
                    <Link href="/" className={style.link}>
                        Home
                    </Link>
                    <hr className={style.separator} />
                </li>
                {navigationLinks.slice(1).map((link) => (
                    <li key={link.label}>
                        <Link href={link.href} className={style.link}>
                            {link.label}
                        </Link>
                    </li>
                ))}
                {isHacked && (
                    <li key={hackedLink.label}>
                        <Link href={hackedLink.href} className={style.link}>
                            <GlitchedText text={hackedLink.label} altText={hackedLink.label} headingElement="span" />
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};
