"use client";

import { MobileNavigation } from "@/components/Navigation/MobileNavigation/MobileNavigation";
import { DesktopNavigation } from "@/components/Navigation/DesktopNavigation/DesktopNavigation";

export const Navigation = () => {
    return (
        <>
            <MobileNavigation />
            <DesktopNavigation />
        </>
    );
};
