import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "1.app/providers/StoreProvider";
import { IArticle } from "5.entities/Article";
import { getArticlesPageLimit } from "../../selectors/articlesPageSelectors";

interface IFetchArticlesArgs {
  page: number;
}

export const fetchArticles = createAsyncThunk<
  IArticle[],
  IFetchArticlesArgs,
  IThunkConfig<string>
>(
  "articlesPage/fetchArticles",

  async (args, thunkAPI) => {
    const { page } = args;
    const { rejectWithValue, extra, getState } = thunkAPI;
    const limit = getArticlesPageLimit(getState());
    try {
      const response = await extra.api.get<IArticle[]>(`/articles`, {
        params: { _expand: "user", _page: page, _limit: limit },
      });
      if (!response.data) {
        throw Error("Ошибка получения списка статей");
      }

      return response.data;
    } catch (error) {
      return rejectWithValue("ошибка получения списка статей");
    }
  }
);
