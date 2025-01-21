import type { Meta, StoryObj } from "@storybook/react";

import { THEME } from "6.shared/context/theme/ThemeContext";
import { Input } from "./Input";

const meta = {
  title: "shared/Input",
  component: Input,
  tags: ["autodocs"],
  args: { value: "Введите текст>", id: "TextInput" },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Dark: Story = {
  parameters: {
    theme: THEME.DARK,
  },
};
