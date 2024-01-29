import path from 'path';
import webpack, { optimize } from 'webpack';
import HTMLWebpackPlugin from "html-webpack-plugin";
import { BuildMode, BuildOptions } from './types/config';

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[]{

    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
    ]
}