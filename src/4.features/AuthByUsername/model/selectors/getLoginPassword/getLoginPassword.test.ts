import { getLoginPassword } from "./getLoginPassword";
import { IStateSchema } from "1.app/providers/StoreProvider";

describe("getLoginPassword", () => {
  test("should return 123123", () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: { password: "123123" },
    };

    expect(getLoginPassword(state as IStateSchema)).toEqual("123123");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<IStateSchema> = {};

    expect(getLoginPassword(state as IStateSchema)).toEqual("");
  });
});
