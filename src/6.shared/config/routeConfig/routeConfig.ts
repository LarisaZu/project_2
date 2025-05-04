export enum AppRoute {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  ARTICLES = "articles",
  ARTICLE_DETAILS = "articles_details",
  ARTICLE_EDIT = "articles_edit",
  ARTICLE_CREATE = "articles_create",
  //last
  NOT_FOUND = "not_found",
}

export const routePath: Record<AppRoute, string> = {
  [AppRoute.MAIN]: "/",
  [AppRoute.ABOUT]: "/about",
  [AppRoute.PROFILE]: "/profile/", // + id
  [AppRoute.ARTICLES]: "/articles/",
  [AppRoute.ARTICLE_DETAILS]: "/articles/", // + id
  [AppRoute.ARTICLE_EDIT]: "/articles/:articleId/edit",
  [AppRoute.ARTICLE_CREATE]: "/articles/new",
  //last
  [AppRoute.NOT_FOUND]: "*",
};
