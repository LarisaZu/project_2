import { DeepPartial } from "@reduxjs/toolkit";
import { IStateSchema } from "1.app/providers/StoreProvider/config/StateSchema";
import { getCounterValue } from "./getCounterValue";

describe("getCounterValue", () => {
  test("return counter value", () => {
    const state: DeepPartial<IStateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as IStateSchema)).toEqual(10);
  });
});
