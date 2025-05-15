import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "1.app/providers/StoreProvider";
import { IProfile } from "../../model/types/profile";

export const fetchProfileData = createAsyncThunk<
  IProfile,
  string,
  IThunkConfig<string>
>(
  "profile/fetchProfileData",

  async (profileId, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;
    try {
      const response = await extra.api.get<IProfile>(`/profiles/${profileId}`);
      if (!response.data) {
        throw Error("Ошибка получения данных профиля");
      }

      return response.data;
    } catch (error) {
      return rejectWithValue("ошибка получения данных профиля");
    }
  }
);
