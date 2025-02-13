import type { Meta, StoryObj } from "@storybook/react";

import { THEME } from "6.shared/context/theme/ThemeContext";
import { StoreDecorator } from "6.shared/config/storybook";
import ProfilePage from "./ProfilePage";

const meta = {
  title: "pages/ProfilePage",
  component: ProfilePage,
  tags: ["autodocs"],
  decorators: [StoreDecorator],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfilePageLight: Story = {};

export const ProfilePageDark: Story = {
  parameters: {
    theme: THEME.DARK,
  },
};
