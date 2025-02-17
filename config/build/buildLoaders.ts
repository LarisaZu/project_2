import webpack from "webpack";

import { IBuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";

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
    // options: {
    //   // чтобы не ломать сборку
    //   transpileOnly: true,
    // },
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

  const cssLoader = buildCssLoader(isDev);

  return [svgLoader, fileLoader, babelLoader, typescriptLoader, cssLoader];
}
