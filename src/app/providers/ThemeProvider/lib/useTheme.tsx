import { useContext } from "react";
import { Theme, ThemeContext } from "./ThemeContext";


interface useThemeProps  {
    theme: Theme,
    changeTheme: () => void
}

export const useTheme = ():useThemeProps => {
    const { theme, setTheme } = useContext(ThemeContext)

    const changeTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
    }

    return {
        theme,
        changeTheme
    }
}