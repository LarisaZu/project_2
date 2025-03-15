import type { Meta, StoryObj } from "@storybook/react";

import { THEME } from "6.shared/context/theme/ThemeContext";
import { Text } from "./Text";

const meta = {
  title: "shared/Text",
  component: Text,
  tags: ["autodocs"],
  args: {
    title: "Title lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus eligendi accusantium doloribus eum saepe fugiat velit quae dolorem recusandae?",
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
  parameters: {
    theme: THEME.DARK,
  },
};

export const OnlyTitle: Story = {
  args: {
    text: undefined,
  },
};

export const OnlyText: Story = {
  args: {
    title: undefined,
  },
};

export const Error: Story = {
  args: {
    variant: "error",
  },
};

export const SizeL: Story = {
  args: {
    size: "size_l",
  },
};
