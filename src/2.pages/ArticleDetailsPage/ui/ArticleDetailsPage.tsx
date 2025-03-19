import { memo } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { ArticleDetails } from "5.entities/Article";
import { CommentsList } from "5.entities/Comment";
import { Text } from "6.shared/ui-kit/Text/Text";
import { classNames } from "6.shared/lib";
import {
  DynamicModuleLoader,
  TReducersList,
} from "6.shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  articleDetailsCommentsReducer,
  getArticlesComments,
} from "../model/slice/articleDetailsCommentsSlice";

import cls from "./ArticleDetailsPage.module.scss";
import { useSelector } from "react-redux";
import { getArticleCommentsIsLoading } from "../model/selectors/comments";
import { useAppDispatch, useInitialEffect } from "6.shared/lib/hooks";
import { fetchCommentsByArticleId } from "../model/api/fetchCommentsByArticleId/fetchCommentsByArticleId";

interface IArticleDetailsPageProps {
  className?: string;
}

const reducers: TReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = memo(function ArticleDetailsPage(
  props: IArticleDetailsPageProps
) {
  const { className } = props;
  const { articleId } = useParams<{ articleId: string }>();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticlesComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const { t } = useTranslation("article_details");

  useInitialEffect(() => dispatch(fetchCommentsByArticleId(articleId)));

  let content;

  if (!articleId) {
    content = t("Статья не найдена");
  } else {
    content = (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <ArticleDetails id={articleId} />
        <Text className={cls["comment-title"]} title={t("Комментарии")} />

        <CommentsList isLoading={commentsIsLoading} data={comments} />
      </DynamicModuleLoader>
    );
  }

  return (
    <div className={classNames(cls.articleDetailsPage, [className])}>
      {content}
    </div>
  );
});

export default ArticleDetailsPage;
