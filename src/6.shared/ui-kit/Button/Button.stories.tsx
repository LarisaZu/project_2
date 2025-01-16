import type { Meta, StoryObj } from "@storybook/react";

import { THEME } from "6.shared/context/theme/ThemeContext";
import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "shared/Button",
  component: Button,
  // parameters: {
  // layout: "centered",
  // },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //  onClick: fn()
  args: { children: "Button" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};

export const PrimaryDark: Story = {
  parameters: {
    theme: THEME.DARK,
  },
};

export const Clear: Story = {
  args: {
    variant: "clear",
  },
};

export const ClearDark: Story = {
  args: {
    variant: "clear",
  },
  parameters: {
    theme: THEME.DARK,
  },
};

export const ClearInverted: Story = {
  args: {
    variant: "clearInverted",
  },
};

export const ClearInvertedDark: Story = {
  args: {
    variant: "clearInverted",
  },
  parameters: {
    theme: THEME.DARK,
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const OutlineDark: Story = {
  args: {
    variant: "outline",
  },
  parameters: {
    theme: THEME.DARK,
  },
};

export const OutlineSizeM: Story = {
  args: {
    variant: "outline",
    size: "size_m",
  },
};

export const OutlineSizeL: Story = {
  args: {
    variant: "outline",
    size: "size_l",
  },
};

export const OutlineSizeXL: Story = {
  args: {
    variant: "outline",
    size: "size_xl",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
  },
};

export const FilledDark: Story = {
  args: {
    variant: "filled",
  },
  parameters: {
    theme: THEME.DARK,
  },
};

export const FilledInverted: Story = {
  args: {
    variant: "filledInverted",
  },
};

export const FilledInvertedDark: Story = {
  args: {
    variant: "filledInverted",
  },
  parameters: {
    theme: THEME.DARK,
  },
};

export const SquareSizeM: Story = {
  args: {
    square: true,
    children: "<",
    size: "size_m",
  },
};

export const SquareSizeL: Story = {
  args: {
    square: true,
    children: "<",
    size: "size_l",
  },
};

export const SquareSizeXL: Story = {
  args: {
    square: true,
    children: "<",
    size: "size_xl",
  },
};
