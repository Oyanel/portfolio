"use client";

import { createContext } from "react";

export type PopupContextProps = {
    type: "hacking" | undefined;
    setType: (type: PopupContextProps["type"]) => void;
};

export const PopupContext = createContext<PopupContextProps>({
    type: undefined,
    setType: () => {
        throw new Error("Not implemented");
    },
});
