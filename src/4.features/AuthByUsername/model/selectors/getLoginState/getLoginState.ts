import { IStateSchema } from "1.app/providers/StoreProvider/config/StateSchema";

export const getLoginState = (state: IStateSchema) => state.loginForm;
