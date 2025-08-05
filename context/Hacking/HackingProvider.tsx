"use client";

import Cookies from "js-cookie";
import { PropsWithChildren, useEffect, useState } from "react";
import { HackingContext, SmileContextProps } from "@/context/Hacking/HackingContext";
import { HACKING_COOKIE_NAME } from "@/features/Hacking/constant";

export const HackingProvider = ({ children }: PropsWithChildren) => {
    const [isHacked, setHacked] = useState<SmileContextProps["isHacked"]>(false);

    useEffect(() => {
        if (Cookies.get(HACKING_COOKIE_NAME)) {
            setHacked(true);
        }
    }, []);

    return <HackingContext.Provider value={{ isHacked, setHacked }}>{children}</HackingContext.Provider>;
};
