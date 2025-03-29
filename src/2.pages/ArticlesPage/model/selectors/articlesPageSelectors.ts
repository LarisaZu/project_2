import { IStateSchema } from "1.app/providers/StoreProvider";
import { EArticleView } from "5.entities/Article";

export const getArticlesPageIsLoading = (state: IStateSchema) =>
  state?.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: IStateSchema) =>
  state?.articlesPage?.error;
export const getArticlesPageView = (state: IStateSchema) =>
  state?.articlesPage?.view || EArticleView.SMALL;
