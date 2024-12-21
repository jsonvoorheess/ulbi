import React, { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import "app/styles/index.scss"

export enum ThemeButton {
    CLEAR = "clear",
    OUTLINE = "outline"

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ThemeButton
}

export const Button:FC<ButtonProps> = ({ className, children, theme, ...otherProps }) => {
    return (
        <button className={classNames(styles.button, {}, [className, styles[theme]])} {...otherProps} >
            {children}
        </button>
    );
};