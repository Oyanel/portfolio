import { PropsWithChildren } from "react";
import style from "./dialogueBox.module.scss";
import classNames from "classnames";

type Props = PropsWithChildren & { className?: string };

export const DialogueBox = ({ children, className }: Props) => (
    <div className={classNames(style.dialogBox, className)}>
        <div className={classNames(style.line, style.line1)} />
        <div className={classNames(style.line, style.line2)} />
        <div className={classNames(style.line, style.line3)} />
        <div className={classNames(style.line, style.line4)} />
        {children}
    </div>
);
