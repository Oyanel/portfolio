"use client";

import Link from "next/link";
import style from "./MobileNavigation.module.scss";
import { useCallback, useContext } from "react";
import { usePathname } from "next/navigation";
import { hackedLink, navigationLinks } from "@/components/Navigation/constant";
import classNames from "classnames";
import { GlitchedText } from "@/components/GlitchedText/GlitchedText";
import { HackingContext } from "@/context/Hacking/HackingContext";

export const MobileNavigation = () => {
    const pathname = usePathname();
    const { isHacked } = useContext(HackingContext);

    const isActive = useCallback((linkPath: string) => pathname === linkPath, [pathname]);

    return (
        <nav className={style.container}>
            <ul className={style.linkList}>
                {navigationLinks.map((link) => (
                    <li key={link.label}>
                        <Link
                            href={link.href}
                            className={classNames(style.link, {
                                [style.active]: isActive(link.href),
                            })}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
                {isHacked && (
                    <li key={hackedLink.label}>
                        <Link
                            href={hackedLink.href}
                            className={classNames(style.link, {
                                [style.active]: isActive(hackedLink.href),
                            })}
                        >
                            <GlitchedText text={hackedLink.label} altText={hackedLink.label} headingElement="span" />
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};
