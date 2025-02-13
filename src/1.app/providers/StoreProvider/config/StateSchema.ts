import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import {
  AnyAction,
  CombinedState,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";

import { ILoginFormSchema } from "4.features/AuthByUsername";
import { IUserSchema } from "5.entities/User";
import { IProfileSchema } from "5.entities/Profile";

export interface IStateSchema {
  user: IUserSchema;

  // Асинхронные редюсеры
  loginForm?: ILoginFormSchema;
  profile?: IProfileSchema;
}

export type TStateSchemaKeys = keyof IStateSchema;

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>;
  reduce: (
    state: IStateSchema,
    action: AnyAction
  ) => CombinedState<IStateSchema>;
  add: (key: TStateSchemaKeys, reducer: Reducer) => void;
  remove: (key: TStateSchemaKeys) => void;
}

export interface ReduxStoreWithManager extends ToolkitStore<IStateSchema> {
  reducerManager: IReducerManager;
}
