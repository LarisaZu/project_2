import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { IBuildOptions } from "./types/config";

export function buildLoaders(options: IBuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          sourceMap: false,
          modules: {
            auto: (resourcePath: string) => resourcePath.includes(".module."),
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:8]"
              : "[hash:base64:8]",
          },
        },
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: false,
        },
      },
    ],
  };

  return [svgLoader, fileLoader, babelLoader, typescriptLoader, cssLoader];
}
