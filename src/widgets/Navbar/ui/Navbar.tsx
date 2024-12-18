import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import * as styles from "./Navbar.module.scss"
import {AppLink} from "shared/AppLink";
import {AppLinkTheme} from "shared/AppLink/ui/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";


interface NavbarProps {
    className?: string;

}

export const Navbar:FC<NavbarProps> = ({ className }) => {
   return (
        <div className={classNames(styles.navbar,  {}, [className])} >
            <div className={styles.links} >
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" >Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about" >О нас</AppLink>
            </div>
        </div>
    );
};
