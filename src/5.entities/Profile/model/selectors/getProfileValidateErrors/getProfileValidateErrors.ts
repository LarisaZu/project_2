import { IStateSchema } from "1.app/providers/StoreProvider";

export const getProfileValidateErrors = (state: IStateSchema) =>
  state?.profile?.validateErrors;
