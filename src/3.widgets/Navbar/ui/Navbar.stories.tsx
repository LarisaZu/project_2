import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "./Navbar";
import { THEME } from "6.shared/context/theme/ThemeContext";
import { StoreDecorator } from "6.shared/config/storybook";

const meta = {
  title: "widgets/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  decorators: [StoreDecorator],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    theme: THEME.DARK,
  },
};
