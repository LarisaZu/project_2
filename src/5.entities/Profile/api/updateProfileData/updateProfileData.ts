import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "1.app/providers/StoreProvider";
import { IProfile } from "../../model/types/profile";

export const updateProfileData = createAsyncThunk<
  IProfile,
  void,
  IThunkConfig<string>
>(
  "profile/updateProfileData",

  async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;
    try {
      const formData = getState().profile?.formData ?? {};

      const response = await extra.api.put<IProfile>("/profile", formData);
      if (!response.data) {
        throw Error("Ошибка авторизации");
      }

      return response.data;
      return formData;
    } catch (error) {
      return rejectWithValue("ошибка получения данных профиля");
    }
  }
);
