import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "1.app/providers/StoreProvider";
import { IProfile } from "../../model/types/profile";

export const fetchProfileData = createAsyncThunk<
  IProfile,
  void,
  IThunkConfig<string>
>(
  "profile/fetchProfileData",

  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;
    try {
      const response = await extra.api.get<IProfile>("/profile");

      if (!response.data) {
        throw Error("Ошибка авторизации");
      }

      return response.data;
    } catch (error) {
      return rejectWithValue("ошибка получения данных профиля");
    }
  }
);
