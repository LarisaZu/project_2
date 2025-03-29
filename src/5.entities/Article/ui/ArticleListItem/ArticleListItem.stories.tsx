import type { Meta, StoryObj } from "@storybook/react";
import { IParameters } from "@config/storybook/preview";

import { StoreDecorator } from "6.shared/config/storybook";
import { EArticleView } from "../../model/types/article";
import { ArticleListItem } from "./ArticleListItem";
import { THEME } from "6.shared/context/theme/ThemeContext";
import { data } from "../../mock/articlesMockData";

type MetaWithParameters = Meta<typeof ArticleListItem> & {
  parameters?: IParameters;
};

const meta: MetaWithParameters = {
  title: "entities/Article/ArticleListItem",
  component: ArticleListItem,
  tags: ["autodocs"],
  decorators: [StoreDecorator],
  args: { article: data },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};

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
