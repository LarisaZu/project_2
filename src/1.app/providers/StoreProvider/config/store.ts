import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { IStateSchema } from "./StateSchema";
import { userReducer } from "5.entities/User";
import { loginFormReducer } from "4.features/AuthByUsername";

export const createReduxStore = (initialState: IStateSchema) => {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    user: userReducer,
    loginForm: loginFormReducer,
  };

  return configureStore<IStateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
