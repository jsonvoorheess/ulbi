import { classNames } from "./classNames";

describe("test cn", () => {
    test("with only first param", () => {
        expect(classNames("button", { "blue": true }, ["abcs"])).toBe("button blue abcs")
    })
    test("with additional class", () => {
        expect(classNames("button", {}, ["red"])).toBe("button red")
    })
})