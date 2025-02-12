import { DeepPartial } from "@reduxjs/toolkit";

import { getLoginError } from "./getLoginError";
import { IStateSchema } from "1.app/providers/StoreProvider";

describe("getLoginError", () => {
  test("should return Error", () => {
    const state: DeepPartial<IStateSchema> = { loginForm: { error: "Error" } };

    expect(getLoginError(state as IStateSchema)).toEqual("Error");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<IStateSchema> = {};

    expect(getLoginError(state as IStateSchema)).toEqual(undefined);
  });
});
