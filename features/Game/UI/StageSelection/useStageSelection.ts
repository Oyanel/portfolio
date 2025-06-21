import { useState } from "react";
import { StageType } from "@/features/Game/UI/StageSelection/StageSelection.type";
import { stageList } from "@/features/Game/UI/StageSelection/constant";
import { eventManager } from "@/features/Game/EventManager";

export const useStageSelection = () => {
    const [selectedStage, setSelectedStage] = useState<StageType>(stageList[0]);

    const onStageChange = (stage: StageType) => {
        setSelectedStage(stage);
    };

    const selectStage = () => {
        eventManager.emit({ type: "PLAY", stage: selectedStage });
    };

    return {
        selectedStage,
        onStageChange,
        selectStage,
    };
};
