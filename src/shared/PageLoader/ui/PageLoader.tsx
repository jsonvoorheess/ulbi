import React from "react";
import cls from "./PageLoader.module.scss"
import { classNames } from "shared/lib/classNames/classNames";

export const PageLoader = () => {
    return (
        <div className={classNames(cls.pageloader)}>
            <div className={cls.lds_ring}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};
