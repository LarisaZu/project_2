import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "1.app/providers/StoreProvider";
import { IArticle } from "5.entities/Article";

export const fetchArticleRecommendations = createAsyncThunk<
  IArticle[],
  void,
  IThunkConfig<string>
>(
  "articleDetails/fetchArticleRecommendations",

  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;

    try {
      const response = await extra.api.get<IArticle[]>(`/articles`, {
        params: {
          _limit: 4,
          _expand: "user",
        },
      });
      if (!response.data) {
        throw Error("Ошибка получения списка рекомендаций");
      }

      return response.data;
    } catch (error) {
      return rejectWithValue("ошибка получения списка рекомендаций");
    }
  }
);
