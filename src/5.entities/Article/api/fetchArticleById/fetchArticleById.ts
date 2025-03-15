import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "1.app/providers/StoreProvider";
import { IArticle } from "../../model/types/article";

export const fetchArticleById = createAsyncThunk<
  IArticle,
  string,
  IThunkConfig<string>
>(
  "articleDetails/fetchArticleDetailsData",

  async (articleId, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;
    try {
      const response = await extra.api.get<IArticle>(`/articles/${articleId}`);
      if (!response.data) {
        throw Error("Ошибка получения данных");
      }

      return response.data;
    } catch (error) {
      return rejectWithValue("ошибка получения статьи");
    }
  }
);
