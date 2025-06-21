import { useState } from "react";
import { StageSelection } from "@/features/Game/UI/StageSelection/StageSelection";
import style from "./UI.module.scss";

enum UIState {
    DEFAULT,
}

export const UI = () => {
    const [uiState] = useState<UIState>(UIState.DEFAULT);

    return (
        <div className={style.UIRoot}>
            {uiState === UIState.DEFAULT && <StageSelection />}
        </div>
    )
}