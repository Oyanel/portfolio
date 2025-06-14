import style from "./LinkButton.module.scss";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

export interface IParams extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    label: string;
    linkTo: string;
}

export const LinkButton = (props: IParams) => {
    const { linkTo, label, className, ...rest } = props;

    return (
        <a
            className={`${style.linkButton} ${className ?? ""}`}
            href={linkTo}
            rel="noreferrer"
            target="_blank"
            {...rest}
        >
            {label}
        </a>
    );
};
