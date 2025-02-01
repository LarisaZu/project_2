import { getLoginState } from "../getLoginState/getLoginState";
import { createSelector } from "@reduxjs/toolkit";

export const getLoginError = createSelector(
  getLoginState,
  (loginFormState) => loginFormState?.error
);
