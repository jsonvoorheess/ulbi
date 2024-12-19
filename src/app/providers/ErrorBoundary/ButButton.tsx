import React, { useEffect, useState } from "react";
import { Button } from "shared/Button";

export const ButButton = () => {
    const [error, setError] = useState(false)

    const throwError = () => setError(true)

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    return (
        <Button onClick={throwError}>
            throw error
        </Button>
    );
};
