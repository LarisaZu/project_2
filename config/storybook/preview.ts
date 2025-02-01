import type { Preview, Parameters } from "@storybook/react";
import "1.app/styles/index.scss";
import {
  ThemeDecorator,
  RouterDecorator,
  I18nextDecorator,
} from "6.shared/config/storybook";
import { THEME } from "6.shared/context/theme/ThemeContext";
import { IStateSchema } from "1.app/providers/StoreProvider";
import { DeepPartial } from "@reduxjs/toolkit";

export interface IParameters extends Parameters {
  theme?: THEME;
  state?: DeepPartial<IStateSchema>;
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
    state: { loginForm: { username: "admin", password: "12" } },
  },
  decorators: [
    ThemeDecorator,
    RouterDecorator,
    I18nextDecorator,
    // StoreDecorator,
  ],
};

export default preview;
