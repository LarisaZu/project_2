import { IStateSchema } from "1.app/providers/StoreProvider";

export const getProfileReadonly = (state: IStateSchema) =>
  state?.profile?.readonly;
