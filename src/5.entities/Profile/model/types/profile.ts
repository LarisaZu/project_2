import { ECountry } from "5.entities/Country";
import { ECurrency } from "5.entities/Currency";

export interface IProfile {
  firstName?: string;
  lastName?: string;
  age?: number;
  country?: ECountry;
  currency?: ECurrency;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface IProfileSchema {
  data?: IProfile;
  formData?: IProfile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
