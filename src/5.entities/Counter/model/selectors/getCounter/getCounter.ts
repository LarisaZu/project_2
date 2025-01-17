import { IStateSchema } from "1.app/providers/StoreProvider/config/StateSchema";

export const getCounter = (state: IStateSchema) => state.counter;
