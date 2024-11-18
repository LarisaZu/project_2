export enum AppRoute {
  MAIN = "main",
  ABOUT = "about",
}

export const routePath: Record<AppRoute, string> = {
  [AppRoute.MAIN]: "/",
  [AppRoute.ABOUT]: "/about",
};
