import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { counterReducer } from "5.entities/Counter";
import { IStateSchema } from "./StateSchema";
import { userReducer } from "5.entities/User";

export const createReduxStore = (initialState: IStateSchema) => {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<IStateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
