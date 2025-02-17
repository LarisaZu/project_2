import { IStateSchema } from "1.app/providers/StoreProvider";

export const getProfileError = (state: IStateSchema) => state?.profile?.error;
