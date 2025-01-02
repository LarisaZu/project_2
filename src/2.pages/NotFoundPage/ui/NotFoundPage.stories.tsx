import type { Meta, StoryObj } from "@storybook/react";

import { THEME } from "6.shared/context/theme/ThemeContext";
import { NotFoundPage } from "./NotFoundPage";

const meta = {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
  tags: ["autodocs"],
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotFoundPageLight: Story = {};

export const NotFoundPageDark: Story = {
  parameters: {
    theme: THEME.DARK,
  },
};
