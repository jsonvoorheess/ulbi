import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/Button";
import { ThemeButton } from "shared/Button/ui/Button";
import cls from "./LangSwitcher.module.scss"


interface LangSwitcherProps {
    short: boolean
}


export const LangSwitcher:FC<LangSwitcherProps> = ({ short }) => {
    const { t, i18n } = useTranslation();

    const toggle  = async () => {
        await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
    }
    return (
        <Button theme={ThemeButton.CLEAR} className={cls.lang} onClick={toggle}>
            { short ? t("Язык сокращенно") : t("Язык") }
        </Button>
    );
};
