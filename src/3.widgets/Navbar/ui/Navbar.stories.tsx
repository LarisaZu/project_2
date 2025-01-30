import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "./Navbar";
import { THEME } from "6.shared/context/theme/ThemeContext";
import { StoreDecorator } from "6.shared/config/storybook";
import { IParameters } from "@config/storybook/preview";

type MetaWithParameters = Meta<typeof Navbar> & {
  parameters?: IParameters;
};

const meta: MetaWithParameters = {
  title: "widgets/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  decorators: [StoreDecorator],
};

export default meta;

type Story = StoryObj<typeof meta> & {
  parameters?: IParameters;
};

export const Primary: Story = {};

export const DarkNavbar: Story = {
  parameters: {
    theme: THEME.DARK,
  },
};

export const AuthNavbar: Story = {
  parameters: {
    theme: THEME.DARK,
    state: { user: { authData: {} } },
  },
};
