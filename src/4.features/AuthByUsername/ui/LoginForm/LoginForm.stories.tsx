import type { Meta, StoryObj } from "@storybook/react";

import { THEME } from "6.shared/context/theme/ThemeContext";
import { StoreDecorator } from "6.shared/config/storybook";
import { LoginForm } from "./LoginForm";
import { IParameters } from "@config/storybook/preview";

type MetaWithParameters = Meta<typeof LoginForm> & {
  parameters?: IParameters;
};

const meta: MetaWithParameters = {
  title: "features/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  decorators: [StoreDecorator],
};

export default meta;

type Story = StoryObj<typeof meta> & {
  parameters?: IParameters;
};

export const Primary: Story = {};

export const PrimaryDark: Story = {
  parameters: { theme: THEME.DARK },
};

export const Error: Story = {
  parameters: {
    state: {
      loginForm: {
        username: "admin",
        password: "12",
        error: "Ошибка авторизации",
      },
    },
  },
};

export const Loading: Story = {
  parameters: {
    state: {
      loginForm: {
        username: "admin",
        password: "12",
        isLoading: true,
      },
    },
  },
};
