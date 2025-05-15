import type { Meta, StoryObj } from "@storybook/react";
import { IParameters } from "@config/storybook/preview";

import { ViewToggle } from "./ViewToggle";
import { THEME } from "6.shared/context/theme/ThemeContext";

type MetaWithParameters = Meta<typeof ViewToggle> & {
  parameters?: IParameters;
};

const meta: MetaWithParameters = {
  title: "features/ViewToggle",
  component: ViewToggle,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta> & {
  parameters?: IParameters;
};

export const Primary: Story = {};
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
