import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import {
  AnyAction,
  CombinedState,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { NavigateFunction } from "react-router-dom";

import { IArticleDetailsCommentsSchema } from "2.pages/ArticleDetailsPage";
import { ILoginFormSchema } from "4.features/AuthByUsername";
import { IAddCommentFormSchema } from "4.features/addNewComment";
import { IUserSchema } from "5.entities/User";
import { IProfileSchema } from "5.entities/Profile";
import { IArticleDetailsSchema } from "5.entities/Article";
import { IArticlesPageSchema } from "2.pages/ArticlesPage";

export interface IStateSchema {
  user: IUserSchema;

  // Асинхронные редюсеры
  loginForm?: ILoginFormSchema;
  profile?: IProfileSchema;
  articleDetails?: IArticleDetailsSchema;
  articleDetailsComments?: IArticleDetailsCommentsSchema;
  commentForm?: IAddCommentFormSchema;
  articlesPage?: IArticlesPageSchema;
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

export interface IThunkExtraArg {
  api: AxiosInstance;
  navigate?: NavigateFunction;
}

export interface IThunkConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArg;
  state: IStateSchema;
}
