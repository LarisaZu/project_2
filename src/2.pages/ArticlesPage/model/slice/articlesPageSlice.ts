import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { IStateSchema } from "1.app/providers/StoreProvider";
import { EArticleView, IArticle } from "5.entities/Article";
import { IArticlesPageSchema } from "../types/articlesPageSchema";
import { fetchArticles } from "../api/fetchArticles/fetchArticles";
import { ARTICLES_VIEW_KEY } from "6.shared/const/localstorage";

const articlesAdapter = createEntityAdapter<IArticle>({
  selectId: (article: IArticle) => article.id,
});

const articlesPageSlice = createSlice({
  name: "articlesPageSlice",
  initialState: articlesAdapter.getInitialState<IArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: EArticleView.SMALL,
  }),
  reducers: {
    setView: (state, action: PayloadAction<EArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_KEY, action.payload);
    },
    initState: (state) => {
      state.view = localStorage.getItem(ARTICLES_VIEW_KEY) as EArticleView;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(
      fetchArticles.fulfilled,
      (state, action: PayloadAction<IArticle[]>) => {
        state.isLoading = false;
        articlesAdapter.setAll(state, action.payload);
      }
    );
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const getArticles = articlesAdapter.getSelectors<IStateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
);

export const { actions: articlesPageActions, reducer: articlesPageReducer } =
  articlesPageSlice;
