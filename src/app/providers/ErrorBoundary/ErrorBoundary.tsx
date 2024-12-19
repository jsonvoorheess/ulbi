import React, { ErrorInfo, ReactNode } from "react";
import { ErrorPage } from "widgets/ErrorPage/ui/ErrorPage";


interface ErrorBoundaryProps {
    children:ReactNode,
}


interface ErrorBoundaryState {
    hasError:boolean,

}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props:ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error:Error) {
        return { hasError: true };
    }

    componentDidCatch(error:Error, info:ErrorInfo) {
        console.log(error, info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            return <ErrorPage />
        }

        return this.props.children;
    }
}

export default ErrorBoundary