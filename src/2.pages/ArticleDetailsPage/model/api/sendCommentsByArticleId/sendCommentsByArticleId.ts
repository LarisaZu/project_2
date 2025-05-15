import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "1.app/providers/StoreProvider";
import { IComment } from "5.entities/Comment";
import { getUserAuthState } from "5.entities/User";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

export const sendCommentsByArticleId = createAsyncThunk<
  IComment,
  { articleId: string; text: string },
  IThunkConfig<string>
>(
  "articleDetails/sendCommentsByArticleId",

  async ({ articleId, text }, thunkAPI) => {
    const { rejectWithValue, extra, dispatch, getState } = thunkAPI;
    const user = getUserAuthState(getState());

    try {
      if (!articleId || !text || !user) {
        return rejectWithValue("no data");
      }

      const response = await extra.api.post<IComment>(`/comments`, {
        text,
        articleId,
        userId: user.id,
      });

      if (!response.data) {
        throw Error("Ошибка при отправке комментария");
      }

      dispatch(fetchCommentsByArticleId(articleId));
      return response.data;
    } catch (error) {
      return rejectWithValue("Ошибка при отправке комментария");
    }
  }
);
