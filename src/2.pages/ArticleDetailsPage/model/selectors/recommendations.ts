import { IStateSchema } from "1.app/providers/StoreProvider";

export const getArticleRecommendationsIsLoading = (state: IStateSchema) =>
  state?.articleDetailsPage?.recommendations?.isLoading || false;
export const getArticleRecommendationsError = (state: IStateSchema) =>
  state?.articleDetailsPage?.recommendations?.error;
