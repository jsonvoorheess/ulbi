import { render,screen } from "@testing-library/react";
import { Button } from "./Button";

/**
 * @jest-environment jsdom
 */

describe("Button", () => {
    test("Button render", () => {
        render(<Button>Test</Button>)
        expect(screen.getByText("Test")).toBeInTheDocument()
    })
})
