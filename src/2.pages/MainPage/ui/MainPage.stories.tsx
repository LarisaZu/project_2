import type { Meta, StoryObj } from "@storybook/react";

import { THEME } from "6.shared/context/theme/ThemeContext";
import MainPage from "./MainPage";

const meta = {
  title: "pages/MainPage",
  component: MainPage,
  tags: ["autodocs"],
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainPageLight: Story = {};

export const MainPageDark: Story = {
  parameters: {
    theme: THEME.DARK,
  },
};
