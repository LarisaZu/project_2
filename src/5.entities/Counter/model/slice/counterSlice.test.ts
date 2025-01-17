import { DeepPartial } from "@reduxjs/toolkit";
import { ICounterSchema } from "../types/counterSchema";
import { counterReducer, counterActions } from "./counterSlice";

describe("counterSlice", () => {
  test("increment", () => {
    const state: DeepPartial<ICounterSchema> = {
      value: 10,
    };
    expect(
      counterReducer(state as ICounterSchema, counterActions.increment())
    ).toEqual({
      value: 11,
    });
  });
  test("decrement", () => {
    const state: DeepPartial<ICounterSchema> = {
      value: 10,
    };
    expect(
      counterReducer(state as ICounterSchema, counterActions.decrement())
    ).toEqual({
      value: 9,
    });
  });
  test("undefined state", () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
