import { useEffect, useRef, useState } from "react";
import { StageSelection } from "@/features/Game/UI/StageSelection/StageSelection";
import style from "./UI.module.scss";
import { eventManager } from "@/features/Game/EventManager";
import { Interaction } from "@/features/Game/UI/Interaction/Interaction";
import { ObjectInteractableGameEvent, ObjectInteractionGameEvent, PlayUIEvent } from "@/features/Game/game/Events.type";
import { DIALOGUES_CONFIG_PATHS } from "@/features/Game/UI/Interaction/config";
import { DialoguesAtlas } from "@/features/Game/UI/Interaction/interaction.type";
import { Interactable } from "@/features/Game/UI/Interactable/Interactable";

enum UIScreen {
    STAGE_SELECTION = "STAGE_SELECTION",
    INTERACTION = "INTERACTION",
    INTERACTABLE = "INTERACTABLE",
}

type StageSelectionUiState = {
    type: UIScreen.STAGE_SELECTION;
};

type InteractableUiState = {
    type: UIScreen.INTERACTABLE;
    isInteractable: boolean;
};

type InteractionUiState = {
    type: UIScreen.INTERACTION;
    objectName: string;
    dialogueKey: string;
};

type UIState = StageSelectionUiState | InteractionUiState | InteractableUiState;

export const UI = () => {
    const [uiState, setUiState] = useState<UIState | undefined>({ type: UIScreen.STAGE_SELECTION });
    const dialoguesRef = useRef<DialoguesAtlas>(null);

    useEffect(() => {
        eventManager.on("PLAY", async (event) => {
            const { stage } = event as PlayUIEvent;
            const dialogues = await import(`./Interaction/dialogues/${DIALOGUES_CONFIG_PATHS[stage.id]}`);
            dialoguesRef.current = dialogues.default;
            setUiState(undefined);
        });

        eventManager.on("OBJECT_INTERACTION", (event) => {
            const { dialogueKey, objectName } = event as ObjectInteractionGameEvent;
            if (!dialoguesRef.current) {
                throw new Error("dialog not loaded");
            }
            setUiState({ type: UIScreen.INTERACTION, dialogueKey, objectName });
        });

        eventManager.on("OBJECT_INTERACTABLE", (event) => {
            const { isInteractable } = event as ObjectInteractableGameEvent;
            if (!isInteractable) {
                setUiState(undefined);
                return;
            }
            setUiState({ type: UIScreen.INTERACTABLE, isInteractable });
        });

        eventManager.on("DIALOGUE_END", () => {
            setUiState(undefined);
        });

        return () => {
            eventManager.removeListener("PLAY");
            eventManager.removeListener("DIALOGUE_END");
            eventManager.removeListener("OBJECT_INTERACTION");
            eventManager.removeListener("OBJECT_INTERACTABLE");
        };
    }, []);

    return (
        <div className={style.UIRoot}>
            {uiState?.type === UIScreen.STAGE_SELECTION && <StageSelection />}
            {uiState?.type === UIScreen.INTERACTION && (
                <Interaction {...uiState} dialogues={dialoguesRef.current as DialoguesAtlas} />
            )}
            {uiState?.type === UIScreen.INTERACTABLE && <Interactable {...uiState} />}
        </div>
    );
};
