import { EntityState } from "@reduxjs/toolkit";
import { IArticle } from "5.entities/Article";

export interface IArticleDetailsRecommendationsSchema
  extends EntityState<IArticle> {
  isLoading?: boolean;
  error?: string;
}
