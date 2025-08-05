"use client";

import { createContext } from "react";

export type SmileContextProps = {
    isHacked: boolean;
    setHacked: (isHacked: boolean) => void;
};

export const HackingContext = createContext<SmileContextProps>({
    isHacked: false,
    setHacked: () => {
        throw new Error("Not implemented");
    },
});
