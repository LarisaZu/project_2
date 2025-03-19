import type { Meta, StoryObj } from "@storybook/react";
import { IParameters } from "@config/storybook/preview";

import { StoreDecorator } from "6.shared/config/storybook";
import { IComment } from "../../model/types/comment";
import { THEME } from "6.shared/context/theme/ThemeContext";

import { CommentCard } from "./CommentCard";

const data: IComment = {
  id: "1",
  user: {
    id: "1",
    username: "admin",
  },
  text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum dolores voluptatibus animi recusandae distinctio reiciendis modi, repellat, dolorem atque et laboriosam ducimus, consequatur doloribus omnis? Sed minus quod quasi dolore!",
};

type MetaWithParameters = Meta<typeof CommentCard> & {
  parameters?: IParameters;
};

const meta: MetaWithParameters = {
  title: "entities/CommentCard",
  component: CommentCard,
  tags: ["autodocs"],
  args: { data },
  decorators: [StoreDecorator],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
  parameters: {
    theme: THEME.DARK,
  },
};

export const PrimaryRed: Story = {
  parameters: {
    theme: THEME.RED,
  },
};
