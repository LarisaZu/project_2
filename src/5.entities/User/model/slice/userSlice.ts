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
    },
    initUserAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload;
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
