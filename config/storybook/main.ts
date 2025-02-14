import webpack, { RuleSetRule } from "webpack";
import path from "path";
import type { StorybookConfig } from "@storybook/react-webpack5";

import { IBuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["../../public"],
  webpackFinal: async (config) => {
    const paths: IBuildPaths = {
      entry: "",
      build: "",
      html: "",
      src: path.resolve(__dirname, "..", "..", "src"),
    };

    config.resolve.modules.push(paths.src);
    //  алиас для "config"
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@config": path.resolve(__dirname, "..", "..", "config"),
    };

    config.module.rules.push({
      ...buildCssLoader(true),
    });

    config.resolve.extensions.push(".tsx", ".ts");

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.plugins.push(
      new webpack.ProvidePlugin({
        React: "react",
      })
    );
    config.plugins.push(
      new webpack.DefinePlugin({
        __IS_DEV__: true,
        __API__: "",
      })
    );

    return config;
  },
};
export default config;
