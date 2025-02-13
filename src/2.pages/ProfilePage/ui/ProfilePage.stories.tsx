import type { Meta, StoryObj } from "@storybook/react";

import { THEME } from "6.shared/context/theme/ThemeContext";
import ProfilePage from "./ProfilePage";

const meta = {
  title: "pages/ProfilePage",
  component: ProfilePage,
  tags: ["autodocs"],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfilePageLight: Story = {};

export const ProfilePageDark: Story = {
  parameters: {
    theme: THEME.DARK,
  },
};
