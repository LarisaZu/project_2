import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { USER_LOCALSTORAGE_KEY } from "6.shared/const/localstorage";
import { IUser, IUserSchema } from "../types/userSchema";

const initialState: IUserSchema = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload;
      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(action.payload)
      );
    },
    initUserAuthData: (state, action: PayloadAction<IUser>) => {
      const authData = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (authData) {
        state.authData = JSON.parse(authData);
      }
    },
    logout: (state, action: PayloadAction<IUser>) => {
      state.authData = null;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
