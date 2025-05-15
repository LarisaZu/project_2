import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import {
  AnyAction,
  CombinedState,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

import { IArticlesPageSchema } from "2.pages/ArticlesPage";
import { IArticleDetailsPageSchema } from "2.pages/ArticleDetailsPage";
import { ILoginFormSchema } from "4.features/AuthByUsername";
import { IAddCommentFormSchema } from "4.features/addNewComment";
import { TScrollSchema } from "4.features/scrollSave";
import { IUserSchema } from "5.entities/User";
import { IProfileSchema } from "5.entities/Profile";
import { IArticleDetailsSchema } from "5.entities/Article";

export interface IStateSchema {
  user: IUserSchema;
  scroll: TScrollSchema;

  // Асинхронные редюсеры
  loginForm?: ILoginFormSchema;
  profile?: IProfileSchema;
  articleDetails?: IArticleDetailsSchema;
  articleDetailsPage?: IArticleDetailsPageSchema;
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
}

export interface IThunkConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArg;
  state: IStateSchema;
}
