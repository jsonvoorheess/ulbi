import { lazy } from "react";

const AboutPageAsync = lazy(() => new Promise((resolve) => {
    setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        resolve(import("./AboutPage"))
    }, 2000)
}))
export default AboutPageAsync