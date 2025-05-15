import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";
import avatarImg from "6.shared/lib/assets/test/avatar_img.jpg";

const meta = {
  title: "shared/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: { alt: "avatar", src: avatarImg },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Size_50: Story = {
  args: {
    size: 50,
  },
};

export const Size_300: Story = {
  args: {
    size: 300,
  },
};
