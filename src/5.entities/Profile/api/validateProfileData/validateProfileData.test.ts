import { ECurrency } from "../../../Currency";
import { ECountry } from "../../../Country";
import { validateProfileData } from "./validateProfileData";
import { EValidateProfileError } from "../../model/types/profile";

const data = {
  firstName: "Homer",
  lastName: "Simpson",
  age: 45,
  country: ECountry.USA,
  currency: ECurrency.USD,
  city: "New York",
  username: "admin",
};

describe("validateProfileData.test", () => {
  test("validate success", () => {
    expect(validateProfileData(data)).toEqual([]);
  });

  test("without first and last", () => {
    expect(
      validateProfileData({ ...data, firstName: "", lastName: "" })
    ).toEqual([EValidateProfileError.INCORRECT_USER_DATA]);
  });

  test("incorrect all", () => {
    expect(validateProfileData({})).toEqual([
      EValidateProfileError.INCORRECT_USER_DATA,
      EValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
