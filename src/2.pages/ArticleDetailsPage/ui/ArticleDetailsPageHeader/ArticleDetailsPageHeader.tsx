import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { classNames } from "6.shared/lib";
import { Button } from "6.shared/ui-kit/Button/Button";
import { AppRoute, routePath } from "6.shared/config/routeConfig/routeConfig";
import { getArticleDetailsData } from "5.entities/Article/model/selectors/getArticleDetails";

import { getCanEditArticle } from "../../model/selectors/article";
import cls from "./ArticleDetailsPageHeader.module.scss";

interface IArticleDetailsPageProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(function ArticleDetailsPage(
  props: IArticleDetailsPageProps
) {
  const { className } = props;
  const navigate = useNavigate();

  const article = useSelector(getArticleDetailsData);
  const canEdit = useSelector(getCanEditArticle);

  const { t } = useTranslation("prompt");

  const handleBackToList = useCallback(() => {
    navigate(routePath[AppRoute.ARTICLES]);
  }, [navigate]);

  const handleEditArticle = useCallback(() => {
    navigate(routePath[AppRoute.ARTICLES] + article?.id + "/edit");
  }, [article?.id, navigate]);

  return (
    <div className={classNames(cls.header, [className])}>
      <Button onClick={handleBackToList}>{t("Назад к списку")}</Button>
      {canEdit && (
        <Button className={cls["edit-btn"]} onClick={handleEditArticle}>
          {t("Редактировать")}
        </Button>
      )}
    </div>
  );
});
