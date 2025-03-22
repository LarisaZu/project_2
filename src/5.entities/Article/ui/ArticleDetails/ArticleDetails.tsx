import React, { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { fetchArticleById } from "5.entities/Article/api/fetchArticleById/fetchArticleById";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "5.entities/Article/model/selectors/getArticleDetails";
import {
  DynamicModuleLoader,
  TReducersList,
} from "6.shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch, useInitialEffect } from "6.shared/lib/hooks";
import { Text } from "6.shared/ui-kit/Text/Text";
import { Skeleton } from "6.shared/ui-kit/Skeleton/Skeleton";
import { Avatar } from "6.shared/ui-kit/Avatar/Avatar";
import { classNames } from "6.shared/lib";
import EyeIcon from "6.shared/lib/assets/icons/eye-outlined.svg";
import CalendarIcon from "6.shared/lib/assets/icons/calendar.svg";
import { Icon } from "6.shared/ui-kit/Icon/Icon";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { EArticleBlockType, TArticleBlock } from "../../model/types/article";
import { ArticleTextBlock } from "../ArticleTextBlock/ArticleTextBlock";
import { ArticleCodeBlock } from "../ArticleCodeBlock/ArticleCodeBlock";
import { ArticleImageBlock } from "../ArticleImageBlock/ArticleImageBlock";

import cls from "./ArticleDetails.module.scss";

interface IArticleDetailsProps {
  id: string;
  className?: string;
}

const initialReducers: TReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(function ArticleDetails(
  props: IArticleDetailsProps
) {
  const { className, id } = props;

  const dispatch = useAppDispatch();

  const data = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  const { t } = useTranslation("article_details");

  useInitialEffect(() => dispatch(fetchArticleById(id)));

  const renderBlock = useCallback((block: TArticleBlock) => {
    switch (block.type) {
      case EArticleBlockType.TEXT:
        return <ArticleTextBlock key={block.id} block={block} />;

      case EArticleBlockType.CODE:
        return <ArticleCodeBlock key={block.id} block={block} />;

      case EArticleBlockType.IMAGE:
        return <ArticleImageBlock key={block.id} block={block} />;

      default:
        return null;
    }
  }, []);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={cls.avatar}
          width={200}
          height={200}
          radius="50%"
        />
        <Skeleton className={cls.title} width={600} height={30} />
        <Skeleton className={cls.title} width={400} height={30} />
        <Skeleton className={cls.skeleton} height={230} />
        <Skeleton className={cls.skeleton} height={230} />
      </>
    );
  } else if (error) {
    content = <Text title={t("Ошибка загрузки статьи")} align="center" />;
  } else {
    content = (
      <>
        <div className={cls["avatar-wrapper"]}>
          <Avatar
            size={200}
            src={data?.img}
            alt={data?.title}
            className={cls.avatar}
          />
        </div>
        <Text
          className={cls.title}
          title={data?.title}
          text={data?.subtitle}
          size="size_l"
        />

        <div className={cls["article-info"]}>
          <Icon Svg={EyeIcon} />
          <Text text={String(data?.views)} />
        </div>
        <div className={cls["article-info"]}>
          <Icon Svg={CalendarIcon} />
          <Text text={String(data?.createdAt)} />
        </div>

        <div className={cls.blocks}>{data?.blocks?.map(renderBlock)}</div>
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.articleDetails, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
