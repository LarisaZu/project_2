import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Page } from "3.widgets/Page/Page";
import { AddCommentForm } from "4.features/addNewComment";
import { ArticleDetails, ArticlesList } from "5.entities/Article";
import { CommentsList } from "5.entities/Comment";
import { Text } from "6.shared/ui-kit/Text/Text";
import { classNames } from "6.shared/lib";
import {
  DynamicModuleLoader,
  TReducersList,
} from "6.shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch, useInitialEffect } from "6.shared/lib/hooks";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { fetchCommentsByArticleId } from "../../model/api/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { getArticlesComments } from "../../model/slice/articleDetailsCommentsSlice";
import { getArticlesRecommendations } from "../../model/slice/articleDetailsRecommendationsSlice";
import { sendCommentsByArticleId } from "../../model/api/sendCommentsByArticleId/sendCommentsByArticleId";
import { getArticleRecommendationsIsLoading } from "../../model/selectors/recommendations";
import { fetchArticleRecommendations } from "../../model/api/fetchArticleRecommendations/fetchArticleRecommendations";
import { articleDetailsPageReducer } from "../../model/slice";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";

import cls from "./ArticleDetailsPage.module.scss";

interface IArticleDetailsPageProps {
  className?: string;
}

const reducers: TReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = memo(function ArticleDetailsPage(
  props: IArticleDetailsPageProps
) {
  const { className } = props;
  const { articleId } = useParams<{ articleId: string }>();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticlesComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const recommendations = useSelector(getArticlesRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(
    getArticleRecommendationsIsLoading
  );

  const { t } = useTranslation(["article_details", "prompt"]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(articleId));
    dispatch(fetchArticleRecommendations());
  });

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
        <ArticleDetailsPageHeader />
        <div className={cls.wrapper}>
          <ArticleDetails id={articleId} />

          <Text title={t("Рекомендации")} />
          <ArticlesList
            className={cls.recommendations}
            articles={recommendations}
            isLoading={recommendationsIsLoading}
            target="_blank"
          />

          <Text title={t("Комментарии")} />
          <AddCommentForm onSendComment={handleCommentSubmit} />
          <CommentsList isLoading={commentsIsLoading} data={comments} />
        </div>
      </DynamicModuleLoader>
    );
  }

  return (
    <Page className={classNames(cls.articleDetailsPage, [className])}>
      {content}
    </Page>
  );
});

export default ArticleDetailsPage;
