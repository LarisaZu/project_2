import type { Meta, StoryObj } from "@storybook/react";

import { THEME } from "6.shared/context/theme/ThemeContext";
import { Modal } from "./Modal";

const meta = {
  title: "shared/Modal",
  component: Modal,
  tags: ["autodocs"],
  args: {
    children:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi repellat aspernatur enim veritatis iste iusto nemo quae, eos",
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
  },
  parameters: {
    theme: THEME.DARK,
  },
};
