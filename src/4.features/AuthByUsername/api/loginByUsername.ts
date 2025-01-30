import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser, userActions } from "5.entities/User";
import { USER_LOCALSTORAGE_KEY } from "6.shared/const/localstorage";

export interface ILoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  IUser,
  ILoginByUsernameProps,
  { rejectValue: string }
>(
  "login/loginByUsername",

  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<IUser>(
        "http://localhost:8000/login",
        authData
      );

      if (!response.data) {
        throw Error("Ошибка авторизации");
      }

      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data)
      );
      thunkAPI.dispatch(userActions.setUserAuthData(response.data));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("ошибка");
    }
  }
);
