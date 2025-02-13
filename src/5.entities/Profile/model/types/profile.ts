import { ECountry, ECurrency } from "6.shared/const/common";

export interface IProfile {
  firstName: string;
  lastName: string;
  age: number;
  country: ECountry;
  currency: ECurrency;
  city: string;
  username: string;
  avatar: string;
}

export interface IProfileSchema {
  data?: IProfile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
