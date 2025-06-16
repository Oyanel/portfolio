"use client";

import Link from "next/link";
import style from "./MobileNavigation.module.scss";
import { useCallback } from "react";
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/components/Navigation/constant";
import classNames from "classnames";

export const MobileNavigation = () => {
    const pathname = usePathname();

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
            </ul>
        </nav>
    );
};
