import webpack from "webpack";
import { BuildPaths } from "../build/types/config";
import path from "path";

export default ({ config }: { config: webpack.Configuration }) => {
    const paths:BuildPaths = {
        build: "",
        html: "",
        entry: "",
        src: path.resolve(__dirname, "..", "..", "src")
    }

    config.resolve.modules.push(paths.src)

    config.resolve.extensions.push(".ts", ".tsx")
    config.module.rules = config.module.rules.map((rule: { test:string }) => {
        if (/svg/.test(rule.test)) {
            return { ...rule, exclude: /\.svg$/i }
        }

        return rule
    })

    config.module.rules.push({
        test: /\.svg$/i,
        use: ["@svgr/webpack"],
    })

    config.module.rules.push({
        test: /\.s[ac]ss$/i,
        use: [
            "style-loader",
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath:  string) => Boolean(resPath.includes(".module.")),
                        localIdentName: "[path][name]__[local]--[hash:base64:8]",
                        namedExport: false,
                    },
                }
            },
            "sass-loader",
        ],
    })

    return config
}