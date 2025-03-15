import { memo } from "react";
import { useTranslation } from "react-i18next";

const ArticlesPage = () => {
  const { t } = useTranslation("articles");

  return <div className="">{t("Статьи")}</div>;
};

export default memo(ArticlesPage);
