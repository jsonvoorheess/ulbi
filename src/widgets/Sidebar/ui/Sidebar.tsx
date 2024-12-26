import React, { useState } from "react";
import cls from "./Sidebar.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher/ui/LangSwitcher";
import { Button } from "shared/Button";
import { ThemeButton } from "shared/Button/ui/Button";

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [])} >
            <Button onClick={onToggle} theme={ThemeButton.BACKGROUND_INVERTED} className={cls.collapsedbtn} >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={cls.switchers} >
                <ThemeSwitcher />
                {collapsed ? <LangSwitcher short={true} /> : <LangSwitcher short={false} /> }
            </div>
        </div>
    );
};
