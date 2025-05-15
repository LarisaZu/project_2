import { IStateSchema } from "1.app/providers/StoreProvider";

export const getProfileData = (state: IStateSchema) => state?.profile?.data;
