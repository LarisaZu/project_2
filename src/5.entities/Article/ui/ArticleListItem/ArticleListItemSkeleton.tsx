import React, { memo } from "react";

import { classNames } from "6.shared/lib";
import { Card } from "6.shared/ui-kit/Card/Card";
import { Skeleton } from "6.shared/ui-kit/Skeleton/Skeleton";

import { EArticleView } from "../../model/types/article";
import cls from "./ArticleListItem.module.scss";

interface IArticleListItemSkeletonProps {
  className?: string;
  view?: EArticleView;
}

export const ArticleListItemSkeleton = memo(function ArticleListItem(
  props: IArticleListItemSkeletonProps
) {
  const { className, view = EArticleView.SMALL } = props;

  if (view === EArticleView.SMALL) {
    return (
      <div className={classNames(cls.articleItem, [className, cls[view]])}>
        <Card>
          <div className={cls["image-wrapper"]}>
            <Skeleton width={200} height={200} className={cls.image} />
          </div>
          <div className={cls["info-wrapper"]}>
            <Skeleton width={130} height={24} className={cls.types} />
          </div>
          <Skeleton width={170} height={24} className={cls.title} />
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cls.articleItem, [className, cls[view]])}>
      <Card>
        <div className={cls.header}>
          <Skeleton width={30} height={30} radius="50%" className={cls.title} />
          <Skeleton width={150} height={24} />
          <Skeleton width={150} height={24} className={cls.date} />
        </div>
        <div className={cls.content}>
          <Skeleton width={300} height={32} className={cls.title} />
          <Skeleton height={24} width={130} className={cls.types} />
          <Skeleton height={200} className={cls.image} />
        </div>
        <div className={cls.footer}>
          <Skeleton height={36} width={200} />
        </div>
      </Card>
    </div>
  );
});
