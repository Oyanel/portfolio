import { Button } from "@/components/Buttons/Button/Button";
import style from "./commands.module.scss";
import classNames from "classnames";
import { eventManager } from "@/features/Game/EventManager";
import { useCallback } from "react";
import { CommandMoveUIEvent } from "@/features/Game/game/Events.type";

export const Commands = () => {
    const onMoveCommand = useCallback((direction: CommandMoveUIEvent["direction"]) => {
        eventManager.emit({ type: "COMMAND_MOVE", direction });
    }, []);

    return (
        <div className={style.commands}>
            <Button
                tabIndex={-1}
                className={classNames(style.command, style.top)}
                onTouchStart={() => onMoveCommand("UP")}
                onTouchEnd={() => onMoveCommand(undefined)}
                variant="command"
            >
                ▲
            </Button>
            <Button
                tabIndex={-1}
                className={classNames(style.command, style.left)}
                onTouchStart={() => onMoveCommand("LEFT")}
                onTouchEnd={() => onMoveCommand(undefined)}
                variant="command"
            >
                ◀
            </Button>
            <Button
                tabIndex={-1}
                className={classNames(style.command, style.bottom)}
                onTouchStart={() => onMoveCommand("DOWN")}
                onTouchEnd={() => onMoveCommand(undefined)}
                variant="command"
            >
                ▼
            </Button>
            <Button
                tabIndex={-1}
                className={classNames(style.command, style.right)}
                onTouchStart={() => onMoveCommand("RIGHT")}
                onTouchEnd={() => onMoveCommand(undefined)}
                variant="command"
            >
                ▶
            </Button>
        </div>
    );
};
