import { memo } from "react";
import { useTranslation } from "react-i18next";

const ArticlesPage = () => {
  const { t } = useTranslation("articles");

  return <div>{t("Статьи")}</div>;
};

export default memo(ArticlesPage);
