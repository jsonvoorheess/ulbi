import React from 'react';
import {useTranslation} from "react-i18next";

const AboutPage = () => {
    const { t, i18n } = useTranslation();
    return (
        <div>
            {t("О нас")}
        </div>
    );
};

export default AboutPage
