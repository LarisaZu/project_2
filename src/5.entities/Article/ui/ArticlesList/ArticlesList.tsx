import React, { memo } from "react";

import { classNames } from "6.shared/lib";
import { EArticleView, IArticle } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

import cls from "./ArticlesList.module.scss";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

const getSkeletonData = (view: EArticleView) =>
  new Array(view === EArticleView.SMALL ? 8 : 3)
    .fill(0)
    .map((el, idx) => ({ ...el, id: String(idx) }));

interface IArticlesListProps {
  className?: string;
  view?: EArticleView;
  articles: IArticle[];
  isLoading?: boolean;
}

export const ArticlesList = memo(function ArticlesList(
  props: IArticlesListProps
) {
  const { className, view = EArticleView.SMALL, articles, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.articlesList, [className, cls[view]])}>
        {getSkeletonData(view).map((el) => (
          <ArticleListItemSkeleton key={el.id} view={view} />
        ))}
      </div>
    );
  }

  if (articles?.length) {
    const renderArticleItem = (article: IArticle) => (
      <ArticleListItem key={article.id} view={view} article={article} />
    );

    return (
      <div className={classNames(cls.articlesList, [className, cls[view]])}>
        {articles.length > 0 ? articles.map(renderArticleItem) : null}
      </div>
    );
  }

  return null;
});
