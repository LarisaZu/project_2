import { Decorator, StoryFn, Parameters } from "@storybook/react/*";

export const ThemeDecorator: Decorator = (
  Story: StoryFn,
  { parameters }: Parameters
) => {
  const { theme } = parameters;
  return (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
};
