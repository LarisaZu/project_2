import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";

const meta = {
  title: "shared/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    label: "Выберите значение",
    options: [
      { label: "Первый", value: "1" },
      { label: "Второй", value: "2" },
      { label: "Третий", value: "3" },
    ],
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
