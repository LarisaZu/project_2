import { EntityState } from "@reduxjs/toolkit";
import { IComment } from "5.entities/Comment";

export interface IArticleDetailsCommentsSchema extends EntityState<IComment> {
  isLoading?: boolean;
  error?: string;
}
