import Link from "next/link";
import style from "./Navigation.module.scss";

export const Navigation = () => (
    <nav className={style.container}>
        <ul className="">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/dev-ground">Dev Ground</Link></li>
        </ul>
    </nav>
);
