import React, { FC } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import * as cls from "./ThemeSwitcher.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import LightIcon from "shared/assets/icons/theme-light.svg"
import DarkIcon from "shared/assets/icons/theme-dark.svg"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";
import { Button } from "shared/Button";
import { ThemeButton } from "shared/Button/ui/Button";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher:FC<ThemeSwitcherProps> = ({ className }) => {
    const { changeTheme, theme } = useTheme()

    return (
        <Button theme={ThemeButton.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className, cls.marg])} onClick={changeTheme}>
            {theme === Theme.DARK ? <DarkIcon/> : <LightIcon />}
        </Button>
    );
};

