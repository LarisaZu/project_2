import { DeepPartial } from "@reduxjs/toolkit";
import { getCounter } from "./getCounter";
import { IStateSchema } from "1.app/providers/StoreProvider/config/StateSchema";

describe("getCounter", () => {
  test("return all counter state", () => {
    const state: DeepPartial<IStateSchema> = {
      counter: { value: 10 },
    };

    expect(getCounter(state as IStateSchema)).toEqual({
      value: 10,
    });
  });
});
