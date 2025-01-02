import { BrowserRouter } from "react-router-dom";
import { Decorator, StoryFn } from "@storybook/react/*";

export const RouterDecorator: Decorator = (Story: StoryFn) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};
