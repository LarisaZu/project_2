import { IStateSchema } from "1.app/providers/StoreProvider/config/StateSchema";

export const getUserAuthState = (state: IStateSchema) => state.user.authData;
