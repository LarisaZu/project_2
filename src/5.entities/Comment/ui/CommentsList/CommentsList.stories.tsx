import type { Meta, StoryObj } from "@storybook/react";

import { THEME } from "6.shared/context/theme/ThemeContext";
import { StoreDecorator } from "6.shared/config/storybook";
import { CommentsList } from "./CommentsList";
import { IParameters } from "@config/storybook/preview";
import { IComment } from "5.entities/Comment/model/types/comment";

const data: IComment[] = [
  {
    id: "1",
    text: "some comment",
    user: { id: "1", username: "admin" },
  },
  {
    id: "2",
    text: "some comment 2",
    user: { id: "2", username: "user" },
  },
];

type MetaWithParameters = Meta<typeof CommentsList> & {
  parameters?: IParameters;
};

const meta: MetaWithParameters = {
  title: "entities/Comment/CommentsList",
  component: CommentsList,
  tags: ["autodocs"],
  decorators: [StoreDecorator],
  args: { data },
};

export default meta;

type Story = StoryObj<typeof meta> & {
  parameters?: IParameters;
};

export const Primary: Story = {};
export const Dark: Story = { parameters: { theme: THEME.DARK } };

export const Loading: Story = { args: { isLoading: true } };
export const NoComments: Story = { args: { data: [] } };
