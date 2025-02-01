import { FC, ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

import { ReduxStoreWithManager } from "1.app/providers/StoreProvider";
import { TStateSchemaKeys } from "1.app/providers/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";

export type TReducersList = {
  [name in TStateSchemaKeys]?: Reducer;
};

type TReducerListEntry = [TStateSchemaKeys, Reducer];

interface IDynamicModuleLoaderProps {
  children: ReactNode;
  reducers: TReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<IDynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount } = props;

  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: TReducerListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: TReducerListEntry) => {
          store.reducerManager.remove(name);
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
