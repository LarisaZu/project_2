import type { Meta, StoryObj } from "@storybook/react";

import { THEME } from "6.shared/context/theme/ThemeContext";
import ArticleDetailsPage from "./ArticleDetailsPage";

const meta = {
  title: "pages/ArticleDetailsPage",
  component: ArticleDetailsPage,
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ArticlesPageLight: Story = {};

export const ArticlesPageDark: Story = {
  parameters: {
    theme: THEME.DARK,
  },
};
