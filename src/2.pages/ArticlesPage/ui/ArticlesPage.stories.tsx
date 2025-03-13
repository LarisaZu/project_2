import type { Meta, StoryObj } from "@storybook/react";

import { THEME } from "6.shared/context/theme/ThemeContext";
import ArticlesPage from "./ArticlesPage";

const meta = {
  title: "pages/ArticlesPage",
  component: ArticlesPage,
  tags: ["autodocs"],
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ArticlesPageLight: Story = {};

export const ArticlesPageDark: Story = {
  parameters: {
    theme: THEME.DARK,
  },
};
