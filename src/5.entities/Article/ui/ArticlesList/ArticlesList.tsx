import React, { HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "6.shared/lib";
import { Text } from "6.shared/ui-kit/Text/Text";
import { EArticleView, IArticle } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

import cls from "./ArticlesList.module.scss";
const getSkeletonData = (view: EArticleView) =>
  new Array(view === EArticleView.SMALL ? 8 : 3)
    .fill(0)
    .map((el, idx) => ({ ...el, id: String(idx) }));

interface IArticlesListProps {
  className?: string;
  view?: EArticleView;
  articles: IArticle[];
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticlesList = memo(function ArticlesList(
  props: IArticlesListProps
) {
  const {
    className,
    view = EArticleView.SMALL,
    articles,
    isLoading,
    target,
  } = props;
  const { t } = useTranslation("articles");

  const renderArticleItem = (article: IArticle) => (
    <ArticleListItem
      key={article.id}
      view={view}
      article={article}
      target={target}
    />
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.articlesList, [className, cls[view]])}>
        <Text size="size_l" title={t("Статьи не найдены")} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.articlesList, [className, cls[view]])}>
      {articles?.length > 0 ? articles.map(renderArticleItem) : null}
      {isLoading && (
        <>
          {getSkeletonData(view).map((el) => (
            <ArticleListItemSkeleton key={el.id} view={view} />
          ))}
        </>
      )}
    </div>
  );
});
