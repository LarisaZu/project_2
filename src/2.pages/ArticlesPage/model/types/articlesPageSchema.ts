import { EntityState } from "@reduxjs/toolkit";
import {
  EArticleView,
  IArticle,
  EArticleSortField,
  EArticleType,
} from "5.entities/Article";
import { TSortOrder } from "6.shared/types";

export interface IArticlesPageSchema extends EntityState<IArticle> {
  isLoading?: boolean;
  error?: string;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  // filters
  view: EArticleView;
  sort: EArticleSortField;
  search: string;
  order: TSortOrder;
  type: EArticleType;

  _inited: boolean;
}
