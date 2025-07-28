import style from "./interactable.module.scss";
import { Button } from "@/components/Buttons/Button/Button";
import { useCallback } from "react";
import { eventManager } from "@/features/Game/EventManager";

export const Interactable = () => {
    const onInteraction = useCallback(() => {
        eventManager.emit({ type: "COMMAND_KEY", key: "E" });
    }, []);

    return (
        <div className={style.interactableRoot}>
            <div className={style.container}>
                <Button className={style.commandE} onClick={onInteraction} variant="command">
                    E
                </Button>
                <p className={style.text}>to Interact with the Object</p>
            </div>
        </div>
    );
};
