import React from 'react';
import "./styles/index.scss"
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";



export const App = () => {
    const { theme, changeTheme } = useTheme()

    return (
        <div className={classNames("app", {}, [theme])} >
            <Link to="/" >Главная</Link>
            <Link to="/about" >О нас</Link>
            <button onClick={changeTheme} >ChangeTheme</button>
                <AppRouter />
        </div>
    );
};
