import { Button } from "@/components/Buttons/Button/Button";
import style from "./commands.module.scss";
import classNames from "classnames";
import { eventManager } from "@/features/Game/EventManager";
import { HTMLAttributes, useCallback } from "react";
import { CommandMoveUIEvent } from "@/features/Game/game/Events.type";

type CommandProps = {
    disabled?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const Commands = ({ disabled, className, ...rest }: CommandProps) => {
    const onMoveCommand = useCallback(
        (direction: CommandMoveUIEvent["direction"]) => {
            if (disabled) {
                return;
            }
            eventManager.emit({ type: "COMMAND_MOVE", direction });
        },
        [disabled],
    );

    return (
        <div {...rest} className={classNames(className, style.commands)}>
            <Button
                tabIndex={-1}
                className={classNames(style.command, style.top)}
                onTouchStart={() => onMoveCommand("UP")}
                onMouseDown={() => onMoveCommand("UP")}
                onTouchEnd={() => onMoveCommand(undefined)}
                onMouseUp={() => onMoveCommand(undefined)}
                onMouseLeave={() => onMoveCommand(undefined)}
                variant="command"
            >
                ▲
            </Button>
            <Button
                tabIndex={-1}
                className={classNames(style.command, style.left)}
                onTouchStart={() => onMoveCommand("LEFT")}
                onMouseDown={() => onMoveCommand("LEFT")}
                onTouchEnd={() => onMoveCommand(undefined)}
                onMouseUp={() => onMoveCommand(undefined)}
                onMouseLeave={() => onMoveCommand(undefined)}
                variant="command"
            >
                ◀
            </Button>
            <Button
                tabIndex={-1}
                className={classNames(style.command, style.bottom)}
                onTouchStart={() => onMoveCommand("DOWN")}
                onMouseDown={() => onMoveCommand("DOWN")}
                onTouchEnd={() => onMoveCommand(undefined)}
                onMouseUp={() => onMoveCommand(undefined)}
                onMouseLeave={() => onMoveCommand(undefined)}
                variant="command"
            >
                ▼
            </Button>
            <Button
                tabIndex={-1}
                className={classNames(style.command, style.right)}
                onTouchStart={() => onMoveCommand("RIGHT")}
                onMouseDown={() => onMoveCommand("RIGHT")}
                onTouchEnd={() => onMoveCommand(undefined)}
                onMouseUp={() => onMoveCommand(undefined)}
                onMouseLeave={() => onMoveCommand(undefined)}
                variant="command"
            >
                ▶
            </Button>
        </div>
    );
};
