import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "1.app/providers/StoreProvider";
import { getArticlesPageInited } from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slice/articlesPageSlice";
import { fetchArticles } from "../fetchArticles/fetchArticles";

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  IThunkConfig<string>
>(
  "articlesPage/initArticlesPage",

  async (_, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI;
    const inited = getArticlesPageInited(getState());
    try {
      if (inited) {
        return;
      }

      dispatch(articlesPageActions.initState());
      dispatch(fetchArticles({ page: 1 }));
    } catch (error) {
      return rejectWithValue("ошибка получения списка статей");
    }
  }
);
