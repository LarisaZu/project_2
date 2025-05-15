import { IStateSchema } from "1.app/providers/StoreProvider";

export const getUserAuthState = (state: IStateSchema) => state.user.authData;
