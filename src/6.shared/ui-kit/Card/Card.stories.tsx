import type { Meta, StoryObj } from "@storybook/react";

import { THEME } from "6.shared/context/theme/ThemeContext";
import { Card } from "./Card";
import { Text } from "../Text/Text";

const meta = {
  title: "shared/Card",
  component: Card,
  tags: ["autodocs"],

  args: { children: <Text title="Title" text="Description" /> },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};

export const Dark: Story = {
  parameters: {
    theme: THEME.DARK,
  },
};

export const Red: Story = {
  parameters: {
    theme: THEME.RED,
  },
};
