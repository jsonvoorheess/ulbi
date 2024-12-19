import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function BuildWebpackConfig(options: BuildOptions):webpack.Configuration {
    return {
        mode: options.mode,
        entry: options.paths.entry,
        devtool: options.isDev ? "inline-source-map" : false,
        output: {
            filename: "[name].[contenthash].js",
            path: options.paths.build,
            clean: true
        },
        devServer: buildDevServer(options),
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
    }
}