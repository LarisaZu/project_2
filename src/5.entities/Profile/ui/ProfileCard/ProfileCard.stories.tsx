import type { Meta, StoryObj } from "@storybook/react";

import { THEME } from "6.shared/context/theme/ThemeContext";
import { ProfileCard } from "./ProfileCard";
import avatarImg from "6.shared/lib/assets/test/avatar_img.jpg";
import { IProfile } from "../../model/types/profile";
import { ECountry } from "../../../Country";
import { ECurrency } from "../../../Currency";

const data: IProfile = {
  firstName: "Homer",
  lastName: "Simpson",
  age: 45,
  country: ECountry.USA,
  currency: ECurrency.USD,
  city: "New York",
  username: "admin",
  avatar: avatarImg,
};

const meta = {
  title: "entities/ProfileCard",
  component: ProfileCard,
  tags: ["autodocs"],
  args: { data },
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileCardPrimary: Story = {};

export const ProfileCardDark: Story = {
  parameters: { theme: THEME.DARK },
};

export const ProfileCardLoading: Story = {
  args: { isLoading: true },
};

export const ProfileCardError: Story = {
  args: { error: "error" },
};
