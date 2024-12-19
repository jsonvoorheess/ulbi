import React from "react";
import * as cls from "./NotFoundPage.module.scss"
import { useTranslation } from "react-i18next";

export const NotFoundPage = () => {
    const { t } = useTranslation()
    return (
        <div className={cls.notfoundpage} >
            {t("Страницы не найдено")}
        </div>
    );
};
