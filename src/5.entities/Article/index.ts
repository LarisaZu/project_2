export type { IArticle } from "./model/types/article";
export type { IArticleDetailsSchema } from "./model/types/articleDetailsSchema";
export {
  articleDetailsActions,
  articleDetailsReducer,
} from "./model/slice/articleDetailsSlice";

export { ArticleDetails } from "./ui/ArticleDetails/ArticleDetails";
