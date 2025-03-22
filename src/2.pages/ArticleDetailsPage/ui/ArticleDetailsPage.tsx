import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { AddCommentForm } from "4.features/addNewComment";
import { ArticleDetails } from "5.entities/Article";
import { CommentsList } from "5.entities/Comment";
import { Text } from "6.shared/ui-kit/Text/Text";
import { classNames } from "6.shared/lib";
import {
  DynamicModuleLoader,
  TReducersList,
} from "6.shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import { useAppDispatch, useInitialEffect } from "6.shared/lib/hooks";
import { getArticleCommentsIsLoading } from "../model/selectors/comments";
import { fetchCommentsByArticleId } from "../model/api/fetchCommentsByArticleId/fetchCommentsByArticleId";
import {
  articleDetailsCommentsReducer,
  getArticlesComments,
} from "../model/slice/articleDetailsCommentsSlice";
import { sendCommentsByArticleId } from "../model/api/sendCommentsByArticleId/sendCommentsByArticleId";
import cls from "./ArticleDetailsPage.module.scss";

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

  const handleCommentSubmit = useCallback(
    (text) => {
      if (articleId) {
        dispatch(sendCommentsByArticleId({ articleId, text }));
      }
    },
    [dispatch, articleId]
  );

  let content;

  if (!articleId) {
    content = t("Статья не найдена");
  } else {
    content = (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div className={cls.wrapper}>
          <ArticleDetails id={articleId} />
          <Text title={t("Комментарии")} />
          <AddCommentForm onSendComment={handleCommentSubmit} />
          <CommentsList isLoading={commentsIsLoading} data={comments} />
        </div>
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
