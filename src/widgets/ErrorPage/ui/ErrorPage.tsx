import React from "react";
import * as cls from "./ErrorPage.module.scss"
import { useTranslation } from "react-i18next";
import { Button } from "shared/Button";

export const ErrorPage = () => {
    const { t } = useTranslation()

    const reloadPage = () => {
        location.reload()
    }

    return (
        <div className={cls.ErrorPage} >
            <p>
                {t("Произошла непредвиденная ошибка")}
            </p>
            <Button onClick={reloadPage} className={cls.errorButton}>
                {t("Обновить страницу")}
            </Button>
        </div>
    );
};
