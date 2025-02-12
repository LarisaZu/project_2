import { DeepPartial } from "@reduxjs/toolkit";
import { loginFormActions, loginFormReducer } from "./loginFormSlice";
import { ILoginFormSchema } from "../types/loginFormSchema";

describe("loginFormSlice.test", () => {
  test("test set username", () => {
    const state: DeepPartial<ILoginFormSchema> = {
      username: "123",
    };
    expect(
      loginFormReducer(
        state as ILoginFormSchema,
        loginFormActions.setUsername("123123")
      )
    ).toEqual({ username: "123123" });
  });

  test("test set password", () => {
    const state: DeepPartial<ILoginFormSchema> = {
      password: "123",
    };
    expect(
      loginFormReducer(
        state as ILoginFormSchema,
        loginFormActions.setPassword("123123")
      )
    ).toEqual({ password: "123123" });
  });
});
