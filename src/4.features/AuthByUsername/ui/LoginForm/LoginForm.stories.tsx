import type { Meta, StoryObj } from "@storybook/react";

import { THEME } from "6.shared/context/theme/ThemeContext";
import { LoginForm } from "./LoginForm";

const meta = {
  title: "feature/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Dark: Story = {
  parameters: {
    theme: THEME.DARK,
  },
};
