import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import BundleAnalyzerPlugin from "webpack-bundle-analyzer"

export function buildPlugins(options:BuildOptions):webpack.WebpackPluginInstance[] {

    const plugins = [
        new HtmlWebpackPlugin({
            template: options.paths.html
        }),
        new webpack.ProgressPlugin({}),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css"
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(options.isDev)
        }),
    ]

    if (options.isDev) {
        plugins.push(new BundleAnalyzerPlugin.BundleAnalyzerPlugin({
            openAnalyzer: false
        }))
    }


    return plugins
}