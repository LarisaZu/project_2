import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildCssLoader = (isDev: boolean) => {
  return {
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
};
