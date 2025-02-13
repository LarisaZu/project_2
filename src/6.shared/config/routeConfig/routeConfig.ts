export enum AppRoute {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  //last
  NOT_FOUND = "not_found",
}

export const routePath: Record<AppRoute, string> = {
  [AppRoute.MAIN]: "/",
  [AppRoute.ABOUT]: "/about",
  [AppRoute.PROFILE]: "/profile",
  //last
  [AppRoute.NOT_FOUND]: "*",
};
