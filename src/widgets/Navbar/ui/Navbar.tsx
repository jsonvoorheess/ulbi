import React, { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss"
import { AppLink } from "shared/AppLink";
import { AppLinkTheme } from "shared/AppLink/ui/AppLink";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/Modal/ui/Modal";
import { Button } from "shared/Button";
import { ThemeButton } from "shared/Button/ui/Button";


interface NavbarProps {
    className?: string;

}

export const Navbar:FC<NavbarProps> = ({ className }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onCloseModal = () => {
        setIsOpen(false)
    }


    const onOpenModal = () => {
        setIsOpen(true)
    }
    const { t } = useTranslation()
    return (
        <div className={classNames(styles.navbar,  {}, [className])} >
            <div className={styles.links} >
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" >{t("Главная")}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about" >{t("О нас")}</AppLink>
            </div>
            <Button theme={ThemeButton.OUTLINE} onClick={onOpenModal}>Войти</Button>
            <Modal isOpen={isOpen} onClose={onCloseModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut blanditiis delectus dolorem
                doloremque facilis fugit ipsam ipsum laboriosam libero minus modi natus omnis praesentium sunt tempore,
                veritatis vero voluptas!
            </Modal>
        </div>
    );
};
