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
  webpackFinal: async (config, { configType }) => {
    const paths: IBuildPaths = {
      entry: "",
      build: "",
      html: "",
      src: path.resolve(__dirname, "..", "..", "src"),
    };

    config.resolve.modules.push(paths.src);

    config.module.rules.push({
      ...buildCssLoader(true),
      // ...buildCssLoader(configType === "DEVELOPMENT"),
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

    return config;
  },
};
export default config;
