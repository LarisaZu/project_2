import { IStateSchema } from "1.app/providers/StoreProvider";

export const getUserMounted = (state: IStateSchema) => state.user._mounted;
