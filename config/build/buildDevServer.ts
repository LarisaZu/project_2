import { IBuildOptions } from "./types/config";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {
  const { port } = options;
  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true
  };
}
