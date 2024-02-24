import { useEffect, useState } from "react";

export const useIsBelowWindowWidth = (maxWidth: number) => {
    const [width, setWidth] = useState<number>(global.innerWidth);

    function handleWindowSizeChange() {
        setWidth(global.innerWidth);
    }

    useEffect(() => {
        global.addEventListener("resize", handleWindowSizeChange);

        return () => {
            global.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    const isMobile = width <= maxWidth;

    return isMobile;
};
