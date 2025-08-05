import { use, useCallback, useEffect, useMemo, useState } from "react";
import { PopupContext } from "@/context/Popup/PopupContext";
import { HackingContext } from "@/context/Hacking/HackingContext";
import Cookies from "js-cookie";
import { HACKING_COOKIE_NAME } from "@/features/Hacking/constant";
import { smileDialogue } from "@/features/Home/Popup/HackingPopup/dialogue";

export const useHackingPopup = () => {
    const { setType } = use(PopupContext);
    const [dialogueLine, setDialogueLine] = useState(0);
    const { setHacked } = use(HackingContext);

    const closePopup = useCallback(() => {
        setType(undefined);
    }, [setType]);

    useEffect(() => {
        const hackingPopupCookie = Cookies.get(HACKING_COOKIE_NAME);

        if (hackingPopupCookie) {
            closePopup();
        }
    }, [closePopup]);

    const nextDialogueLine = () => {
        if (dialogueLine < smileDialogue.length - 1) {
            setDialogueLine((prev) => prev + 1);
            if (dialogueLine === smileDialogue.length - 3) {
                Cookies.set(HACKING_COOKIE_NAME, "true", { expires: 7 });
                setHacked(true);
            }
        } else {
            closePopup();
        }
    };

    const currentDialog = useMemo(() => smileDialogue[dialogueLine], [dialogueLine]);

    return {
        currentDialog,
        nextDialogueLine,
        closePopup,
    };
};
