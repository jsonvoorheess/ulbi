import { RouteProps } from "react-router-dom";
import MainPageAsync from "pages/MainPage/ui/MainPage.async";
import { AboutPageAsync } from "pages/AboutPage";

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about"
}

export const RoutePaths:Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about"
}

export const routeConfig:Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <MainPageAsync />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePaths.about,
        element: <AboutPageAsync />
    }
}