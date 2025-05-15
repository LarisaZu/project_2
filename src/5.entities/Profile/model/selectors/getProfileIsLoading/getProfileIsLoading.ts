import { IStateSchema } from "1.app/providers/StoreProvider";

export const getProfileIsLoading = (state: IStateSchema) =>
  state?.profile?.isLoading;
