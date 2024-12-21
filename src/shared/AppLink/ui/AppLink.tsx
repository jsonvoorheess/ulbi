import React, { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import styles from "./AppLink.module.scss"
import { classNames } from "shared/lib/classNames/classNames";


export const enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}

interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme
}

export const AppLink:FC<AppLinkProps> = ({ className, children, to, theme = AppLinkTheme.PRIMARY }) => {
    return (
        <Link to={to} className={classNames(styles.link, {}, [className, styles[theme]])} >
            {children}
        </Link>
    );
};