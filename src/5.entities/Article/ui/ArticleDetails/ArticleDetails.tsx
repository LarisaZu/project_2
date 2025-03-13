import React, { memo, useEffect } from "react";
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
import { classNames } from "6.shared/lib";
import { useAppDispatch } from "6.shared/lib/hooks";
import { Text } from "6.shared/ui-kit/Text/Text";
import { Skeleton } from "6.shared/ui-kit/Skeleton/Skeleton";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";

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

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <div>
        <Skeleton
          className={cls["skeleton-avatar"]}
          width={200}
          height={200}
          radius="50%"
        />
        <Skeleton className={cls["skeleton-title"]} width={600} height={30} />
        <Skeleton className={cls["skeleton-title"]} width={400} height={30} />
        <Skeleton className={cls.skeleton} height={230} />
        <Skeleton className={cls.skeleton} height={230} />
      </div>
    );
  } else if (error) {
    content = <Text title={t("Ошибка загрузки статьи")} align="center" />;
  } else {
    content = <div className="">ArticleDetails</div>;
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.articleDetails, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
