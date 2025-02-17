import { Decorator, StoryFn, Parameters } from "@storybook/react/*";

import { StoreProvider } from "1.app/providers/StoreProvider";
import { loginFormReducer } from "4.features/AuthByUsername/model/slice/loginFormSlice";
import { profileReducer } from "5.entities/Profile";
import { TReducersList } from "6.shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducers: TReducersList = {
  loginForm: loginFormReducer,
  profile: profileReducer,
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
