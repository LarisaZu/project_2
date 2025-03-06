import type { Meta, StoryObj } from "@storybook/react";
import { IParameters } from "@config/storybook/preview";

import { THEME } from "6.shared/context/theme/ThemeContext";
import { StoreDecorator } from "6.shared/config/storybook";
import ProfilePage from "./ProfilePage";
import { ECountry } from "5.entities/Country";
import { ECurrency } from "5.entities/Currency";
import avatarImg from "6.shared/lib/assets/test/avatar_img.jpg";

const data = {
  firstName: "Homer",
  lastName: "Simpson",
  age: 45,
  country: ECountry.USA,
  currency: ECurrency.USD,
  city: "New York",
  username: "admin",
  avatar: avatarImg,
};

type MetaWithParameters = Meta<typeof ProfilePage> & {
  parameters?: IParameters;
};

const meta: MetaWithParameters = {
  title: "pages/ProfilePage",
  component: ProfilePage,
  tags: ["autodocs"],
  decorators: [StoreDecorator],
  parameters: {
    state: {
      profile: { data, formData: data, isLoading: false, readonly: true },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta> & {
  parameters?: IParameters;
};

export const ProfilePageLight: Story = {};

export const ProfilePageDark: Story = {
  parameters: {
    theme: THEME.DARK,
  },
};

export const ProfilePageEditable: Story = {
  parameters: {
    state: {
      profile: { data, formData: data, isLoading: false, readonly: false },
    },
  },
};
