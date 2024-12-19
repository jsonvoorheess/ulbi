import { RouteProps } from "react-router-dom";
import MainPageAsync from "pages/MainPage/ui/MainPage.async";
import { AboutPageAsync } from "pages/AboutPage";
import { NotFoundPage } from "pages/NotFoundPage/NotFoundPage";

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    NOT_FOUND = "not_found"
}

export const RoutePaths:Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.NOT_FOUND]: "*"
}

export const routeConfig:Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <MainPageAsync />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePaths.about,
        element: <AboutPageAsync />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths.not_found,
        element: <NotFoundPage />
    }
}