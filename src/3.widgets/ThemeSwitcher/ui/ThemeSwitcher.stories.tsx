import type { Meta, StoryObj } from "@storybook/react";

import { THEME } from "6.shared/context/theme/ThemeContext";
import { ThemeSwitcher } from "./ThemeSwitcher";

const meta = {
  title: "widgets/ThemeSwitcher",
  component: ThemeSwitcher,
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThemeSwitcherLight: Story = {};

export const ThemeSwitcherDark: Story = {
  parameters: {
    theme: THEME.DARK,
  },
};
