'use client';

import Link from "next/link";
import style from "./DesktopNavigation.module.scss";
import { navigationLinks } from "@/components/Navigation/constant";

export const DesktopNavigation = () => (
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
        </ul>
    </nav>
);