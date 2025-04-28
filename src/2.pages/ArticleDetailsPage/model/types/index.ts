import { IArticleDetailsCommentsSchema } from "./articleDetailsCommentsSchema";
import { IArticleDetailsRecommendationsSchema } from "./articleDetailsRecommendationsSchema";

export interface IArticleDetailsPageSchema {
  comments: IArticleDetailsCommentsSchema;
  recommendations: IArticleDetailsRecommendationsSchema;
}
