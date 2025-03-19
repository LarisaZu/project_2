import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { IComment } from "5.entities/Comment";
import { IStateSchema } from "1.app/providers/StoreProvider";
import { IArticleDetailsCommentsSchema } from "../types/articleDetailsCommentsSchema";
import { fetchCommentsByArticleId } from "../api/fetchCommentsByArticleId/fetchCommentsByArticleId";

const commentsAdapter = createEntityAdapter<IComment>({
  selectId: (comment: IComment) => comment.id,
});

const articleDetailsCommentsSlice = createSlice({
  name: "articleDetailsCommentsSlice",
  initialState: commentsAdapter.getInitialState<IArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: ["1", "2"],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsByArticleId.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(
      fetchCommentsByArticleId.fulfilled,
      (state, action: PayloadAction<IComment[]>) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload);
      }
    );
    builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const getArticlesComments = commentsAdapter.getSelectors<IStateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
);

export const {
  actions: articleDetailsCommentsActions,
  reducer: articleDetailsCommentsReducer,
} = articleDetailsCommentsSlice;
