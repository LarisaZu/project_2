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
      buildLocales: "",
      locales: "",
      src: path.resolve(__dirname, "..", "..", "src"),
    };

    if (config?.resolve) {
      config.resolve?.modules?.push(paths.src);
      //  алиас для "config"
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "@config": path.resolve(__dirname, "..", "..", "config"),
      };

      config.resolve?.extensions?.push(".tsx", ".ts");
    }

    if (config?.module?.rules) {
      config.module.rules.push({
        ...buildCssLoader(true),
      });

      config.module.rules = config.module.rules
        .filter(
          (rule): rule is RuleSetRule =>
            rule !== null &&
            rule !== undefined &&
            typeof rule === "object" &&
            !Array.isArray(rule) &&
            (rule as RuleSetRule).test !== undefined
        )
        .map((rule: RuleSetRule) => {
          if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
          }
          return rule;
        });

      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
    }

    if (config?.plugins) {
      config.plugins.push(
        new webpack.ProvidePlugin({
          React: "react",
        })
      );
      config.plugins.push(
        new webpack.DefinePlugin({
          __IS_DEV__: JSON.stringify(true),
          __API__: JSON.stringify(""),
          __PROJECT__: JSON.stringify("storybook"),
        })
      );
    }

    return config;
  },

  docs: {
    autodocs: true,
  },
};
export default config;
