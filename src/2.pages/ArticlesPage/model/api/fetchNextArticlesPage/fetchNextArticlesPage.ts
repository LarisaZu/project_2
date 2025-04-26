import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "1.app/providers/StoreProvider";
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum,
} from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slice/articlesPageSlice";
import { fetchArticles } from "../fetchArticles/fetchArticles";

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  IThunkConfig<string>
>(
  "articlesPage/fetchNextArticlesPage",

  async (_, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI;
    const page = getArticlesPageNum(getState());
    const hasMore = getArticlesPageHasMore(getState());
    const isLoading = getArticlesPageIsLoading(getState());
    try {
      if (hasMore && !isLoading) {
        dispatch(articlesPageActions.setPage(page + 1));
        dispatch(fetchArticles({}));
      }
    } catch (error) {
      return rejectWithValue("ошибка получения списка статей");
    }
  }
);
