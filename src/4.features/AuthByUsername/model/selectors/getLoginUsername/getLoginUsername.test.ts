import { getLoginUsername } from "./getLoginUsername";
import { IStateSchema } from "1.app/providers/StoreProvider";

describe("getLoginUsername", () => {
  test("should return Username", () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: { username: "Username" },
    };

    expect(getLoginUsername(state as IStateSchema)).toEqual("Username");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<IStateSchema> = {};

    expect(getLoginUsername(state as IStateSchema)).toEqual("");
  });
});
