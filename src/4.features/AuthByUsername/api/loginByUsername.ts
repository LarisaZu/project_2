import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "1.app/providers/StoreProvider";
import { IUser, userActions } from "5.entities/User";
import { USER_LOCALSTORAGE_KEY } from "6.shared/const/localstorage";

export interface ILoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  IUser,
  ILoginByUsernameProps,
  IThunkConfig<string>
>(
  "login/loginByUsername",

  async (authData, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI;
    try {
      const response = await extra.api.post<IUser>("/login", authData);

      if (!response.data) {
        throw Error("Ошибка авторизации");
      }

      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data)
      );
      dispatch(userActions.setUserAuthData(response.data));

      return response.data;
    } catch (error) {
      return rejectWithValue("ошибка");
    }
  }
);
