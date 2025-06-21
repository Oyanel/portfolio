import { ButtonHTMLAttributes } from "react";
import style from "./Button.module.scss";
import classNames from "classnames";

export interface IParams extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
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
                },
                className,
            )}
            {...rest}
        >
            {children}
        </button>
    );
};
