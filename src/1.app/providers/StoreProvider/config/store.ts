import {
  CombinedState,
  configureStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";

import { userReducer } from "5.entities/User";
import { $api } from "6.shared/api/api";

import { IStateSchema } from "./StateSchema";
import { createReducerManager } from "./reducerManager";

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];

export const createReduxStore = (
  initialState: IStateSchema,
  asyncReducers?: ReducersMapObject<IStateSchema>,
  navigate?: NavigateFunction
) => {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    ...asyncReducers,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<IStateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: { api: $api, navigate },
        },
      }),
  });

  // @ts-expect-error: Unreachable code error
  store.reducerManager = reducerManager;

  return store;
};
