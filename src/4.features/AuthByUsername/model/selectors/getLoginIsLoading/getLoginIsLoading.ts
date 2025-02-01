import { getLoginState } from "../getLoginState/getLoginState";
import { createSelector } from "@reduxjs/toolkit";

export const getLoginIsLoading = createSelector(
  getLoginState,
  (loginFormState) => loginFormState?.isLoading || false
);
