import { useEffect, useState } from "react";
import { StageSelection } from "@/features/Game/UI/StageSelection/StageSelection";
import style from "./UI.module.scss";
import { eventManager } from "@/features/Game/EventManager";

enum UIScreen {
    DEFAULT = "DEFAULT",
    SELECT_OBJECT = "SELECT_OBJECT",
    SELECT_QUESTION = "SELECT_QUESTION",
}

export const UI = () => {
    const [uiState, setUiState] = useState<UIScreen | undefined>(UIScreen.DEFAULT);

    useEffect(() => {
        eventManager.on("PLAY", () => {
            setUiState(undefined);
        });

        return () => {
            eventManager.removeListener("PLAY");
        };
    }, []);

    return <div className={style.UIRoot}>{uiState === UIScreen.DEFAULT && <StageSelection />}</div>;
};
