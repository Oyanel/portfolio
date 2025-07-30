import { HTMLAttributes } from "react";
import style from "./Button.module.scss";
import classNames from "classnames";

export interface IParams extends HTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "dialogue" | "command";
}

export const Button = (props: IParams) => {
    const { children, className, variant, ...rest } = props;

    return (
        <button
            className={classNames(
                style.button,
                {
                    [style.primary]: variant === "primary",
                    [style.secondary]: variant === "secondary",
                    [style.dialogue]: variant === "dialogue",
                    [style.command]: variant === "command",
                },
                className,
            )}
            {...rest}
        >
            {children}
        </button>
    );
};
