import { profileActions, profileReducer } from "./profileSlice";
import { EValidateProfileError, IProfileSchema } from "../types/profile";
import { ECountry } from "../../../Country";
import { ECurrency } from "../../../Currency";
import { updateProfileData } from "../../api/updateProfileData/updateProfileData";

const data = {
  firstName: "Homer",
  lastName: "Simpson",
  age: 45,
  country: ECountry.USA,
  currency: ECurrency.USD,
  city: "New York",
  username: "admin",
};

describe("profileSlice.test", () => {
  test("test set readonly", () => {
    const state: DeepPartial<IProfileSchema> = { readonly: true };
    expect(
      profileReducer(state as IProfileSchema, profileActions.setReadonly(false))
    ).toEqual({ readonly: false });
  });

  test("test cancel edit", () => {
    const state: DeepPartial<IProfileSchema> = {
      data,
      formData: data,
      readonly: false,
      validateErrors: [],
    };
    expect(
      profileReducer(state as IProfileSchema, profileActions.cancelEdit())
    ).toEqual({
      readonly: true,
      validateErrors: undefined,
      formData: data,
      data,
    });
  });

  test("test update", () => {
    const state: DeepPartial<IProfileSchema> = {
      data,
      formData: data,
    };
    expect(
      profileReducer(
        state as IProfileSchema,
        profileActions.updateProfile({ username: "123456" })
      )
    ).toEqual({
      formData: { ...data, username: "123456" },
      data,
    });
  });

  test("fetchProfileData pending", () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: false,
      validateErrors: [EValidateProfileError.INCORRECT_USER_DATA],
    };
    expect(
      profileReducer(state as IProfileSchema, updateProfileData.pending)
    ).toEqual({ isLoading: true, validateErrors: undefined });
  });

  test("fetch Profile Data fulfilled", () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: true,
    };

    expect(
      profileReducer(
        state as IProfileSchema,
        updateProfileData.fulfilled(data, "")
      )
    ).toEqual({
      isLoading: false,
      data,
      formData: data,
      readonly: true,
      validateErrors: undefined,
      error: undefined,
    });
  });
});
