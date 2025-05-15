import { Decorator, StoryFn, Parameters } from "@storybook/react/*";

import { StoreProvider } from "1.app/providers/StoreProvider";
import { loginFormReducer } from "4.features/AuthByUsername";
import { commentFormReducer } from "4.features/addNewComment";
import { profileReducer } from "5.entities/Profile";
import { articleDetailsReducer } from "5.entities/Article";
import { TReducersList } from "6.shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articlesPageReducer } from "2.pages/ArticlesPage/model/slice/articlesPageSlice";
import { articleDetailsPageReducer } from "2.pages/ArticleDetailsPage/model/slice";

const defaultAsyncReducers: TReducersList = {
  loginForm: loginFormReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsPage: articleDetailsPageReducer,
  commentForm: commentFormReducer,
  articlesPage: articlesPageReducer,
};

export const StoreDecorator: Decorator = (
  Story: StoryFn,
  { parameters }: Parameters
) => {
  const { state, asyncReducers } = parameters;
  return (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <Story />
    </StoreProvider>
  );
};
