import { useState } from "react";
import { Stage } from "@/features/Game/UI/StageSelection/StageSelection.type";
import { stageList } from "@/features/Game/UI/StageSelection/constant";

export const useStageSelection = () => {
    const [selectedStage, setSelectedStage] = useState<Stage>(stageList[0]);

    const onStageSelect = (stage: Stage) => {
        setSelectedStage(stage);
        // + emit event for phaser
    }

    return {
        selectedStage,
        onStageSelect
    }
}