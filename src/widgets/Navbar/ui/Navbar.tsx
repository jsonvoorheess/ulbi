import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import * as styles from "./Navbar.module.scss"
import {AppLink} from "shared/AppLink";
import {AppLinkTheme} from "shared/AppLink/ui/AppLink";
import {useTranslation} from "react-i18next";



interface NavbarProps {
    className?: string;

}

export const Navbar:FC<NavbarProps> = ({ className }) => {
    const { t, i18n } = useTranslation()
   return (
        <div className={classNames(styles.navbar,  {}, [className])} >
            <div className={styles.links} >
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" >{t("Главная")}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about" >{t("О нас")}</AppLink>
            </div>
        </div>
    );
};
