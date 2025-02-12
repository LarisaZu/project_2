import { initialLoginFormState } from "../../slice/loginFormSlice";
import { getLoginState } from "../getLoginState/getLoginState";
import { createSelector } from "@reduxjs/toolkit";

export const getLoginIsLoading = createSelector(
  getLoginState,
  (loginFormState) =>
    loginFormState?.isLoading || initialLoginFormState.isLoading
);
