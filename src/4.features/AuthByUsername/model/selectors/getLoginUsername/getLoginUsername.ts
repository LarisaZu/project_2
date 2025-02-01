import { getLoginState } from "../getLoginState/getLoginState";
import { createSelector } from "@reduxjs/toolkit";

export const getLoginUsername = createSelector(
  getLoginState,
  (loginFormState) => loginFormState?.username || ""
);
