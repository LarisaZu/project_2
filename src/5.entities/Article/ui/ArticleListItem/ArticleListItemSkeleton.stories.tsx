import type { Meta, StoryObj } from "@storybook/react";
import { IParameters } from "@config/storybook/preview";

import { StoreDecorator } from "6.shared/config/storybook";
import { EArticleView } from "../../model/types/article";
import { ArticleListItemSkeleton } from "./ArticleListItemSkeleton";
import { THEME } from "6.shared/context/theme/ThemeContext";

type MetaWithParameters = Meta<typeof ArticleListItemSkeleton> & {
  parameters?: IParameters;
};

const meta: MetaWithParameters = {
  title: "entities/Article/ArticleListItemSkeleton",
  component: ArticleListItemSkeleton,
  tags: ["autodocs"],
  decorators: [StoreDecorator],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallNormal: Story = {};

export const BigNormal: Story = {
  args: { view: EArticleView.BIG },
};

export const SmallDark: Story = {
  parameters: { theme: THEME.DARK },
};

export const BigDark: Story = {
  args: { view: EArticleView.BIG },
  parameters: { theme: THEME.DARK },
};

export const SmallRed: Story = {
  parameters: { theme: THEME.RED },
};

export const BigRed: Story = {
  args: { view: EArticleView.BIG },
  parameters: { theme: THEME.RED },
};
