import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoginFormSchema } from "../types/loginFormSchema";
import { loginByUsername } from "../../api/loginByUsername";

export const initialLoginFormState: ILoginFormSchema = {
  username: "",
  password: "",
  isLoading: false,
};

export const loginFormSlice = createSlice({
  name: "loginForm",
  initialState: initialLoginFormState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginByUsername.pending, (state, action) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(loginByUsername.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(loginByUsername.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: loginFormActions, reducer: loginFormReducer } =
  loginFormSlice;
