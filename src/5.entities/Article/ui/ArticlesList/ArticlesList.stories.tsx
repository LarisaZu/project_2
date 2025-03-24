import type { Meta, StoryObj } from "@storybook/react";
import { IParameters } from "@config/storybook/preview";

import { StoreDecorator } from "6.shared/config/storybook";
import { EArticleView } from "../../model/types/article";
import { arrayData } from "../../model/data/articlesFakeData";
import { ArticlesList } from "./ArticlesList";

type MetaWithParameters = Meta<typeof ArticlesList> & {
  parameters?: IParameters;
};

const meta: MetaWithParameters = {
  title: "entities/Article/ArticlesList",
  component: ArticlesList,
  tags: ["autodocs"],
  decorators: [StoreDecorator],
  args: { articles: arrayData },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalSmall: Story = {
  args: { view: EArticleView.SMALL },
};

export const NormalBig: Story = {
  args: { view: EArticleView.BIG },
};

export const LoadingSmall: Story = {
  args: { isLoading: true },
};

export const LoadingBig: Story = {
  args: { isLoading: true, view: EArticleView.BIG },
};
