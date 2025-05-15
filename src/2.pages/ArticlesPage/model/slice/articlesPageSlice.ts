import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { IStateSchema } from "1.app/providers/StoreProvider";
import {
  EArticleView,
  IArticle,
  EArticleSortField,
  EArticleType,
} from "5.entities/Article";
import { IArticlesPageSchema } from "../types/articlesPageSchema";
import { fetchArticles } from "../api/fetchArticles/fetchArticles";
import { ARTICLES_VIEW_KEY } from "6.shared/const/localstorage";
import { TSortOrder } from "6.shared/types";

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
    page: 1,
    hasMore: true,
    _inited: false,
    limit: 9,
    sort: EArticleSortField.CREATED,
    search: "",
    order: "desc",
    type: EArticleType.ALL,
  }),
  reducers: {
    setView: (state, action: PayloadAction<EArticleView>) => {
      const view = action.payload;
      state.view = view;
      state.limit = view === EArticleView.BIG ? 4 : 9;
      localStorage.setItem(ARTICLES_VIEW_KEY, view);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSort: (state, action: PayloadAction<EArticleSortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setOrder: (state, action: PayloadAction<TSortOrder>) => {
      state.order = action.payload;
    },
    setType: (state, action: PayloadAction<EArticleType>) => {
      state.type = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLES_VIEW_KEY) as EArticleView;
      state.view = view;
      state.limit = view === EArticleView.BIG ? 4 : 9;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state, action) => {
      state.error = undefined;
      state.isLoading = true;

      if (action.meta.arg.replace) {
        articlesAdapter.removeAll(state);
      }
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.isLoading = false;

      state.hasMore = action.payload.length >= state.limit;

      if (action.meta.arg.replace) {
        articlesAdapter.setAll(state, action.payload);
      } else {
        articlesAdapter.addMany(state, action.payload);
      }
    });
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
