import { FC, ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

import { ReduxStoreWithManager } from "1.app/providers/StoreProvider";
import { TStateSchemaKeys } from "1.app/providers/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";

export type TReducersList = {
  [name in TStateSchemaKeys]?: Reducer;
};

interface IDynamicModuleLoaderProps {
  children: ReactNode;
  reducers: TReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<IDynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount = true } = props;

  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();
    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as TStateSchemaKeys];
      if (!mounted) {
        store.reducerManager.add(name as TStateSchemaKeys, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as TStateSchemaKeys);
          dispatch({
            type: `@DESTROY ${name} reducer`,
          });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return <>{children}</>;
};
