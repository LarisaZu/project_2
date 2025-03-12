import type { Meta, StoryObj } from "@storybook/react";

import { THEME } from "6.shared/context/theme/ThemeContext";
import { Sidebar } from "./Sidebar";
import { IParameters } from "@config/storybook/preview";
import { StoreDecorator } from "6.shared/config/storybook";

type MetaWithParameters = Meta<typeof Sidebar> & {
  parameters?: IParameters;
};

const meta: MetaWithParameters = {
  title: "widgets/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  decorators: [StoreDecorator],
};

export default meta;

type Story = StoryObj<typeof meta> & {
  parameters?: IParameters;
};

export const Light: Story = {
  parameters: {
    state: { user: { authData: { id: "1", username: "admin" } } },
  },
};

export const Dark: Story = {
  parameters: {
    theme: THEME.DARK,
    state: { user: { authData: { id: "1", username: "admin" } } },
  },
};

export const NoAuth: Story = {};
