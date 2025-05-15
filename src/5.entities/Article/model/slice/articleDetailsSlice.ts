import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IArticleDetailsSchema } from "../types/articleDetailsSchema";
import { fetchArticleById } from "../../api/fetchArticleById/fetchArticleById";
import { IArticle } from "../types/article";

const initialState: IArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const articleDetailsSlice = createSlice({
  name: "articleDetails",
  initialState,
  reducers: {
    // updateProfile: (state, action: PayloadAction<IProfile>) => {
    //   state.formData = { ...state.formData, ...action.payload };
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticleById.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(
      fetchArticleById.fulfilled,
      (state, action: PayloadAction<IArticle>) => {
        state.isLoading = false;
        state.data = action.payload;
      }
    );
    builder.addCase(fetchArticleById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const {
  actions: articleDetailsActions,
  reducer: articleDetailsReducer,
} = articleDetailsSlice;
