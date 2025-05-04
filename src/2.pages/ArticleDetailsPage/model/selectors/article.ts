import { getArticleDetailsData } from "5.entities/Article/model/selectors/getArticleDetails";
import { getUserAuthState } from "5.entities/User";
import { createSelector } from "@reduxjs/toolkit";

export const getCanEditArticle = createSelector(
  getArticleDetailsData,
  getUserAuthState,
  (article, user) => {
    if (!article || !user) {
      return false;
    }

    return article?.user.id === user?.id;
  }
);
