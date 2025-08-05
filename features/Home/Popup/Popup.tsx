"use client";

import style from "./Popup.module.scss";
import classNames from "classnames";
import { HackingPopup } from "@/features/Home/Popup/HackingPopup/HackingPopup";
import { use } from "react";
import { PopupContext } from "@/context/Popup/PopupContext";

export const Popup = () => {
    const { type } = use(PopupContext);

    return (
        <aside role="dialog" className={classNames(style.popupRoot, { [style.hidden]: !type })} aria-modal="true">
            {type === "hacking" && <HackingPopup />}
        </aside>
    );
};
