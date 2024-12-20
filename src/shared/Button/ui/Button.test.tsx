import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";


describe("Button", () => {
    test("Button render", () => {
        render(<Button>Test</Button>)
        expect(screen.getByText("Test")).toBeInTheDocument()
    })
    test("Button with class clear", () => {
        render(<Button theme={ThemeButton.CLEAR} >Test</Button>)
        expect(screen.getByText("Test")).toHaveClass("button")
        screen.debug()
    })
})
