import type { Meta, StoryObj } from "@storybook/react";

import { PageError } from "./PageError";

import { THEME } from "6.shared/context/theme/ThemeContext";

const meta = {
  title: "widgets/PageError",
  component: PageError,
  tags: ["autodocs"],
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    theme: THEME.DARK,
  },
};
