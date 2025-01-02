import type { Preview, Parameters } from "@storybook/react";
import "1.app/styles/index.scss";
import {
  ThemeDecorator,
  RouterDecorator,
  I18nextDecorator,
} from "6.shared/config/storybook";
import { THEME } from "6.shared/context/theme/ThemeContext";

export interface IParameters extends Parameters {
  theme: THEME;
}

export interface IPreview extends Preview {
  parameters: IParameters;
}

const preview: IPreview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    theme: THEME.LIGHT,
  },
  decorators: [ThemeDecorator, RouterDecorator, I18nextDecorator],
};

export default preview;
