import { initialLoginFormState } from "../../slice/loginFormSlice";
import { getLoginState } from "../getLoginState/getLoginState";
import { createSelector } from "@reduxjs/toolkit";

export const getLoginUsername = createSelector(
  getLoginState,
  (loginFormState) => loginFormState?.username || initialLoginFormState.username
);
