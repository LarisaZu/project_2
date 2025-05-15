import { IStateSchema } from "1.app/providers/StoreProvider";
import { ECountry } from "5.entities/Country";
import { ECurrency } from "5.entities/Currency";
import { getProfileData } from "./getProfileData";

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
    const state: DeepPartial<IStateSchema> = { profile: { data } };

    expect(getProfileData(state as IStateSchema)).toEqual(data);
  });

  test("should return undefined", () => {
    const state: DeepPartial<IStateSchema> = {};

    expect(getProfileData(state as IStateSchema)).toEqual(undefined);
  });
});
