import type { Meta, StoryObj } from "@storybook/react";

import { IParameters } from "@config/storybook/preview";
import { THEME } from "6.shared/context/theme/ThemeContext";
import { StoreDecorator } from "6.shared/config/storybook";
import articles from "6.shared/helpers/mock/articlesList.json";
import ArticlesPage from "./ArticlesPage";
import { EArticleView } from "5.entities/Article";

type MetaWithParameters = Meta<typeof ArticlesPage> & {
  parameters?: IParameters;
};

const meta: MetaWithParameters = {
  title: "pages/ArticlesPage",
  component: ArticlesPage,
  tags: ["autodocs"],
  decorators: [StoreDecorator],
  parameters: {
    state: {
      articlesPage: {
        ids: ["1", "2", "3"],
        entities: articles,
        isLoading: false,
        view: EArticleView.SMALL,
        page: 1,
        hasMore: true,
        _inited: false,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ArticlesPagePrimary: Story = {};

export const ArticlesPageDark: Story = {
  parameters: {
    theme: THEME.DARK,
  },
};

export const ArticlesPageBig: Story = {
  parameters: {
    state: {
      articlesPage: {
        ids: ["1", "2", "3"],
        entities: articles,
        isLoading: false,
        view: EArticleView.BIG,
      },
    },
  },
};
