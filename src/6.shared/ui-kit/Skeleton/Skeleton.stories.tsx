import type { Meta, StoryObj } from "@storybook/react";

import { THEME } from "6.shared/context/theme/ThemeContext";
import { Skeleton } from "./Skeleton";

const meta = {
  title: "shared/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Circle: Story = {
  args: {
    width: "100px",
    height: "100px",
    radius: "50%",
  },
};

export const PrimaryDark: Story = {
  parameters: {
    theme: THEME.DARK,
  },
};

export const CircleDARK: Story = {
  args: {
    width: "100px",
    height: "100px",
    radius: "50%",
  },
  parameters: {
    theme: THEME.DARK,
  },
};
