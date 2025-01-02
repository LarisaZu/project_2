import type { Meta, StoryObj } from "@storybook/react";

import { THEME } from "6.shared/context/theme/ThemeContext";
import { AppLink } from "./AppLink";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  tags: ["autodocs"],
  args: { children: "AppLink", to: "/" },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
  args: {
    variant: "primary",
  },
};

export const PrimaryDark: Story = {
  args: {
    variant: "primary",
  },
  parameters: {
    theme: THEME.DARK,
  },
};

export const InvertedLight: Story = {
  args: {
    variant: "inverted",
  },
};

export const InvertedDark: Story = {
  args: {
    variant: "inverted",
  },
  parameters: {
    theme: THEME.DARK,
  },
};
