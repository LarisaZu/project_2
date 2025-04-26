import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "1.app/providers/StoreProvider";
import { EArticleSortField, EArticleType } from "5.entities/Article";
import { TSortOrder } from "6.shared/types";
import { getArticlesPageInited } from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slice/articlesPageSlice";
import { fetchArticles } from "../fetchArticles/fetchArticles";

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  IThunkConfig<string>
>(
  "articlesPage/initArticlesPage",

  async (searchParams, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI;
    const inited = getArticlesPageInited(getState());
    try {
      if (inited) {
        return;
      }

      const orderFromUrl = searchParams.get("order");
      const sortFromUrl = searchParams.get("sort");
      const searchFromUrl = searchParams.get("search");
      const typeFromUrl = searchParams.get("type");

      if (orderFromUrl) {
        dispatch(articlesPageActions.setOrder(orderFromUrl as TSortOrder));
      }
      if (sortFromUrl) {
        dispatch(articlesPageActions.setSort(sortFromUrl as EArticleSortField));
      }
      if (searchFromUrl) {
        dispatch(articlesPageActions.setSearch(searchFromUrl));
      }
      if (typeFromUrl) {
        dispatch(articlesPageActions.setType(typeFromUrl as EArticleType));
      }

      dispatch(articlesPageActions.initState());
      dispatch(fetchArticles({}));
    } catch (error) {
      return rejectWithValue("ошибка получения списка статей");
    }
  }
);
