import { EValidateProfileError, IProfile } from "../../model/types/profile";

export const validateProfileData = (profile: IProfile) => {
  const { firstName, lastName, country } = profile;

  const errors: EValidateProfileError[] = [];

  if (!profile) {
    errors.push(EValidateProfileError.NO_DATA);
  }

  if (!firstName || !lastName) {
    errors.push(EValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!country) {
    errors.push(EValidateProfileError.INCORRECT_COUNTRY);
  }

  return errors;
};
