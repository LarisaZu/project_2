import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IStateSchema } from "1.app/providers/StoreProvider";
import { IArticle } from "5.entities/Article";
import { fetchArticleRecommendations } from "../api/fetchArticleRecommendations/fetchArticleRecommendations";
import { IArticleDetailsRecommendationsSchema } from "../types/articleDetailsRecommendationsSchema";

const recommendationsAdapter = createEntityAdapter<IArticle>({
  selectId: (article: IArticle) => article.id,
});

const articleDetailsRecommendationsSlice = createSlice({
  name: "articleDetailsRecommendationsSlice",
  initialState:
    recommendationsAdapter.getInitialState<IArticleDetailsRecommendationsSchema>(
      {
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
      }
    ),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleRecommendations.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
      state.isLoading = false;
      recommendationsAdapter.setAll(state, action.payload);
    });
    builder.addCase(fetchArticleRecommendations.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const getArticlesRecommendations =
  recommendationsAdapter.getSelectors<IStateSchema>(
    (state) =>
      state.articleDetailsPage?.recommendations ||
      recommendationsAdapter.getInitialState()
  );

export const {
  actions: articleDetailsRecommendationsActions,
  reducer: articleDetailsRecommendationsReducer,
} = articleDetailsRecommendationsSlice;
