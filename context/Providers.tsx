import { PropsWithChildren } from "react";
import { PopupProvider } from "./Popup/PopupProvider";
import { HackingProvider } from "@/context/Hacking/HackingProvider";

export const Providers = ({ children }: PropsWithChildren) => (
    <PopupProvider>
        <HackingProvider>{children}</HackingProvider>
    </PopupProvider>
);
