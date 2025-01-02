import type { Meta, StoryObj } from "@storybook/react";

import { THEME } from "6.shared/context/theme/ThemeContext";
import { Sidebar } from "./Sidebar";

const meta = {
  title: "widgets/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  //  onClick: fn()
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    theme: THEME.DARK,
  },
};
