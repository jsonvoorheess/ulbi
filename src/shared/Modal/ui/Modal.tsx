import React, { FC, MouseEvent, ReactNode, useMemo, useState } from "react";
import styles from "./Modal.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { Portal } from "shared/Portal/Portal";
import { useTheme } from "app/providers/ThemeProvider";


interface ModalProps {
    children?: ReactNode,
    className?: string,
    isOpen?: boolean,
    onClose?: () => void
}

export const Modal:FC<ModalProps> = ({ children, className, isOpen, onClose }) => {
    const { theme } = useTheme()
    const onContentClick = (e:MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }
    
    return (
        <Portal container={document.getElementById("modal")} >
            <div className={classNames(styles.modal, {
                [styles.opened]: isOpen
            }, [className, theme])}>
                <div className={styles.overlay} onClick={(onClose)}>
                    <div className={styles.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
};
