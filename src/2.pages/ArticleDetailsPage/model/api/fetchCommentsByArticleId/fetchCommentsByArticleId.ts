import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "1.app/providers/StoreProvider";
import { IComment } from "5.entities/Comment";

export const fetchCommentsByArticleId = createAsyncThunk<
  IComment[],
  string | undefined,
  IThunkConfig<string>
>(
  "articleDetails/fetchCommentsByArticleId",

  async (articleId, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;
    try {
      if (!articleId) {
        return rejectWithValue("ошибка");
      }

      const response = await extra.api.get<IComment[]>(`/comments`, {
        params: { articleId, _expand: "user" },
      });
      if (!response.data) {
        throw Error("Ошибка получения данных");
      }

      return response.data;
    } catch (error) {
      return rejectWithValue("ошибка получения комментариев");
    }
  }
);
