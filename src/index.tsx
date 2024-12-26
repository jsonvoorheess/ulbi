import { createRoot } from "react-dom/client";
import { App } from "app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import "./shared/config/i18n/i18n";
import ErrorBoundary from "app/providers/ErrorBoundary/ErrorBoundary";
import { store } from "shared/config/store/store";
import { Provider } from "react-redux";


const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <Provider store={store}>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </Provider>
        </ErrorBoundary>
    </BrowserRouter>
);