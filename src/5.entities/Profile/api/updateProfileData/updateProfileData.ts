import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "1.app/providers/StoreProvider";
import { EValidateProfileError, IProfile } from "../../model/types/profile";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<
  IProfile,
  void,
  IThunkConfig<EValidateProfileError[]>
>(
  "profile/updateProfileData",

  async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;
    try {
      const formData = getState().profile?.formData ?? {};

      const errors = validateProfileData(formData);

      if (errors.length) {
        return rejectWithValue(errors);
      }

      const response = await extra.api.put<IProfile>("/profile", formData);
      if (!response.data) {
        throw Error("ошибка");
      }

      return response.data;
    } catch (error) {
      return rejectWithValue([EValidateProfileError.SERVER_ERROR]);
    }
  }
);
