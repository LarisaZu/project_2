export enum AppRoute {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  ARTICLES = "articles",
  ARTICLE_DETAILS = "articles_details",
  //last
  NOT_FOUND = "not_found",
}

export const routePath: Record<AppRoute, string> = {
  [AppRoute.MAIN]: "/",
  [AppRoute.ABOUT]: "/about",
  [AppRoute.PROFILE]: "/profile/", // + id
  [AppRoute.ARTICLES]: "/articles",
  [AppRoute.ARTICLE_DETAILS]: "/articles/", // + id
  //last
  [AppRoute.NOT_FOUND]: "*",
};
