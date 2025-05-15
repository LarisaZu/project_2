import { initialLoginFormState } from "../../slice/loginFormSlice";
import { getLoginState } from "../getLoginState/getLoginState";
import { createSelector } from "@reduxjs/toolkit";

export const getLoginPassword = createSelector(
  getLoginState,
  (loginFormState) => loginFormState?.password || initialLoginFormState.password
);
