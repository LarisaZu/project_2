import { IStateSchema } from "1.app/providers/StoreProvider";
import { ECountry } from "5.entities/Country";
import { ECurrency } from "5.entities/Currency";
import { getProfileValidateErrors } from "./getProfileValidateErrors";
import { EValidateProfileError } from "../../types/profile";

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
      profile: {
        data,
        error: "123",
        isLoading: true,
        readonly: false,
        validateErrors: [
          EValidateProfileError.INCORRECT_USER_DATA,
          EValidateProfileError.NO_DATA,
        ],
      },
    };

    expect(getProfileValidateErrors(state as IStateSchema)).toEqual([
      EValidateProfileError.INCORRECT_USER_DATA,
      EValidateProfileError.NO_DATA,
    ]);
  });

  test("should return undefined", () => {
    const state: DeepPartial<IStateSchema> = {};

    expect(getProfileValidateErrors(state as IStateSchema)).toEqual(undefined);
  });
});
