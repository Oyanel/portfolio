"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { PopupContext, PopupContextProps } from "@/context/Popup/PopupContext";

export const PopupProvider = ({ children }: PropsWithChildren) => {
    const [type, setType] = useState<PopupContextProps["type"]>(undefined);

    useEffect(() => {
        if (type) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }
    }, [type]);

    return <PopupContext.Provider value={{ type, setType }}>{children}</PopupContext.Provider>;
};
