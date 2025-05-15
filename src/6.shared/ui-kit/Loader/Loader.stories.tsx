import type { Meta, StoryObj } from "@storybook/react";

import { THEME } from "6.shared/context/theme/ThemeContext";
import { Loader } from "./Loader";

const meta = {
  title: "shared/Loader",
  component: Loader,
  tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoaderLight: Story = {};

export const LoaderDark: Story = {
  parameters: {
    theme: THEME.DARK,
  },
};
