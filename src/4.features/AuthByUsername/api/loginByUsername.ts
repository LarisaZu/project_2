import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser, userActions } from "5.entities/User";

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

      thunkAPI.dispatch(userActions.setUserAuthData(response.data));

      return response.data;
    } catch () {
      return thunkAPI.rejectWithValue("ошибка");
    }
  }
);
