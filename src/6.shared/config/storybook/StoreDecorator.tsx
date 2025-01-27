import { Decorator, StoryFn, Parameters } from "@storybook/react/*";
import { StoreProvider } from "1.app/providers/StoreProvider";

export const StoreDecorator: Decorator = (
  Story: StoryFn,
  { parameters }: Parameters
) => {
  const { state } = parameters;
  return (
    <StoreProvider initialState={state}>
      <Story />
    </StoreProvider>
  );
};
