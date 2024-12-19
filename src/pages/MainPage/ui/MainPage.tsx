import React from "react";
import { useTranslation } from "react-i18next";
import { ButButton } from "app/providers/ErrorBoundary/ButButton";

const MainPage = () => {
    const { t } = useTranslation()
    return (
        <div>
            <ButButton />
            {t("Главная")}
        </div>
    );
};

export default MainPage
