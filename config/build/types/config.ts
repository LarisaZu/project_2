export type TBuildMode = "development" | "production";

export interface IBuildOptions {
  mode: TBuildMode;
  paths: IBuildPaths;
  isDev: boolean;
}

export interface IBuildPaths {
  entry: string;
  build: string;
  html: string;
}
