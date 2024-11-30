export enum AppRoute {
  MAIN = "main",
  ABOUT = "about",
  NOT_FOUND = "not_found",
}

export const routePath: Record<AppRoute, string> = {
  [AppRoute.MAIN]: "/",
  [AppRoute.ABOUT]: "/about",
  [AppRoute.NOT_FOUND]: "*",
};
