import { Decorator, StoryFn, Parameters } from "@storybook/react/*";
import { ThemeProvider } from "1.app/providers/ThemeProvider";

export const ThemeDecorator: Decorator = (
  Story: StoryFn,
  { parameters }: Parameters
) => {
  const { theme } = parameters;

  document.body.classList.forEach((className) => {
    if (className.includes("theme")) {
      document.body.classList.remove(className);
    }
  });
  document.body.classList.add(theme);

  return (
    <div className={`app ${theme}`}>
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    </div>
  );
};
