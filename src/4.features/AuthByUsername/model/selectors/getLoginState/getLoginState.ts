import { IStateSchema } from "1.app/providers/StoreProvider";

export const getLoginState = (state: IStateSchema) => state.loginForm;
