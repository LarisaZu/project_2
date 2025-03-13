import { memo } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { ArticleDetails } from "5.entities/Article";
import { classNames } from "6.shared/lib";

import cls from "./ArticleDetailsPage.scss";

interface IArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo(function ArticleDetailsPage(
  props: IArticleDetailsPageProps
) {
  const { className } = props;
  const { articleId } = useParams<{ articleId: string }>();

  const { t } = useTranslation("article_details");

  let content;

  if (!articleId) {
    content = t("Статья не найдена");
  } else {
    content = <ArticleDetails id={articleId} />;
  }

  return <div className={classNames("", [className])}>{content}</div>;
});

export default ArticleDetailsPage;
