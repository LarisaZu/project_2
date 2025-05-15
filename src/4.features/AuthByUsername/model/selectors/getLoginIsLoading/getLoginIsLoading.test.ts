import { getLoginIsLoading } from "./getLoginIsLoading";
import { IStateSchema } from "1.app/providers/StoreProvider";

describe("getLoginIsLoading", () => {
  test("should return true", () => {
    const state: DeepPartial<IStateSchema> = { loginForm: { isLoading: true } };

    expect(getLoginIsLoading(state as IStateSchema)).toEqual(true);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<IStateSchema> = {};

    expect(getLoginIsLoading(state as IStateSchema)).toEqual(false);
  });
});
