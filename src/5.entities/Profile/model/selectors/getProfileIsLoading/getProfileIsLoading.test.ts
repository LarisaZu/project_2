import { IStateSchema } from "1.app/providers/StoreProvider";
import { ECountry } from "5.entities/Country";
import { ECurrency } from "5.entities/Currency";
import { getProfileIsLoading } from "./getProfileIsLoading";

const data = {
  firstName: "Homer",
  lastName: "Simpson",
  age: 45,
  country: ECountry.USA,
  currency: ECurrency.USD,
  city: "New York",
  username: "admin",
};

describe("getProfileData", () => {
  test("should return profile", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: { data, error: "123", isLoading: true },
    };

    expect(getProfileIsLoading(state as IStateSchema)).toEqual(true);
  });

  test("should return undefined", () => {
    const state: DeepPartial<IStateSchema> = {};

    expect(getProfileIsLoading(state as IStateSchema)).toEqual(undefined);
  });
});
