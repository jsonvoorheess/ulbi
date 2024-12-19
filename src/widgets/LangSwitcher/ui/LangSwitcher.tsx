import React from 'react';
import {useTranslation} from "react-i18next";
import {Button} from "shared/Button";
import {ThemeButton} from "shared/Button/ui/Button";
import * as cls from "./LangSwitcher.module.scss"


export const LangSwitcher = () => {
    const { t, i18n } = useTranslation();

    const toggle  = async () => {
        await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
    }
    return (
            <Button theme={ThemeButton.CLEAR} className={cls.lang} onClick={toggle}>
                {t("Язык")}
            </Button>
    );
};
