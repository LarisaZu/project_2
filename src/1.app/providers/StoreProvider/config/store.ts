import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { IStateSchema } from "./StateSchema";
import { userReducer } from "5.entities/User";
import { createReducerManager } from "./reducerManager";

export const createReduxStore = (
  initialState: IStateSchema,
  asyncReducers?: ReducersMapObject<IStateSchema>
) => {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    ...asyncReducers,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<IStateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-expect-error: Unreachable code error
  store.reducerManager = reducerManager;

  return store;
};
