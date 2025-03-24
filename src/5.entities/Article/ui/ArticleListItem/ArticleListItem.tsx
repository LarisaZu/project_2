import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { classNames } from "6.shared/lib";
import { Text } from "6.shared/ui-kit/Text/Text";
import EyeIcon from "6.shared/lib/assets/icons/eye-outlined.svg";
import { Icon } from "6.shared/ui-kit/Icon/Icon";
import { Card } from "6.shared/ui-kit/Card/Card";
import { useHover } from "6.shared/lib/hooks";
import { Avatar } from "6.shared/ui-kit/Avatar/Avatar";
import { Button } from "6.shared/ui-kit/Button/Button";

import {
  EArticleBlockType,
  EArticleView,
  IArticle,
  IArticleTextBlock,
} from "../../model/types/article";
import { ArticleTextBlock } from "../ArticleTextBlock/ArticleTextBlock";

import cls from "./ArticleListItem.module.scss";

interface IArticleListItemProps {
  className?: string;
  view?: EArticleView;
  article: IArticle;
}

export const ArticleListItem = memo(function ArticleListItem(
  props: IArticleListItemProps
) {
  const { className, article, view = EArticleView.SMALL } = props;

  const navigate = useNavigate();
  const { t } = useTranslation(["prompt"]);

  const [isHover, bindHover] = useHover();

  const date = <Text text={article.createdAt} className={cls.date} />;
  const title = <Text title={article.title} className={cls.title} />;
  const types = <Text text={article.type.join(" ")} className={cls.types} />;
  const views = (
    <>
      <Text text={article.views.toString()} className={cls.view} />
      <Icon Svg={EyeIcon} />
    </>
  );

  const handleOpenArticle = useCallback(() => {
    navigate(article.id);
  }, [article.id, navigate]);

  if (view === EArticleView.SMALL) {
    return (
      <div
        {...bindHover}
        className={classNames(cls.articleItem, [className, cls[view]])}
        onClick={handleOpenArticle}
      >
        <Card>
          <div className={cls["image-wrapper"]}>
            <img alt={article.title} src={article.img} className={cls.image} />
            {date}
          </div>
          <div className={cls["info-wrapper"]}>
            {types}
            {views}
          </div>
          {title}
        </Card>
      </div>
    );
  }

  const textBlock = article.blocks.find(
    (block) => block.type === EArticleBlockType.TEXT
  ) as IArticleTextBlock;

  return (
    <div className={classNames(cls.articleItem, [className, cls[view]])}>
      <Card>
        <div className={cls.header}>
          <Avatar
            alt={article.user.username}
            src={article.user.avatar}
            size={30}
          />
          <Text text={article.user.username} />
          {date}
        </div>
        <div className={cls.content}>
          {title}
          {types}
          <img src={article.img} alt={article.title} className={cls.image} />
          {textBlock && (
            <ArticleTextBlock block={textBlock} className={cls.block} />
          )}
        </div>
        <div className={cls.footer}>
          <Button onClick={handleOpenArticle}>{t("Читать далее...")}</Button>
          {views}
        </div>
      </Card>
    </div>
  );
});
