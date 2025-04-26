import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "1.app/providers/StoreProvider";
import { IArticle, EArticleType } from "5.entities/Article";
import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from "../../selectors/articlesPageSelectors";
import { addQueryParams } from "6.shared/lib/url/addQueryParams/addQueryParams";

interface IFetchArticlesArgs {
  replace?: boolean;
}

export const fetchArticles = createAsyncThunk<
  IArticle[],
  IFetchArticlesArgs,
  IThunkConfig<string>
>(
  "articlesPage/fetchArticles",

  async (args, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;
    const limit = getArticlesPageLimit(getState());
    const page = getArticlesPageNum(getState());
    const search = getArticlesPageSearch(getState());
    const sort = getArticlesPageSort(getState());
    const order = getArticlesPageOrder(getState());
    const type = getArticlesPageType(getState());

    try {
      addQueryParams({ sort, order, search, type });
      const response = await extra.api.get<IArticle[]>(`/articles`, {
        params: {
          _expand: "user",
          _page: page,
          _limit: limit,
          q: search,
          _sort: sort,
          _order: order,
          ...(type === EArticleType.ALL ? {} : { type }),
        },
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
