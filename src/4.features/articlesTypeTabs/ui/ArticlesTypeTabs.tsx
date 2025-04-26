import React, { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { ITabItem, Tabs } from "6.shared/ui-kit/Tabs/Tabs";
import { EArticleType } from "5.entities/Article";

interface IArticlesTypeTabsProps {
  value: EArticleType;
  onChange: (type: EArticleType) => void;
}

export const ArticlesTypeTabs = memo(function ArticlesTypeTabs(
  props: IArticlesTypeTabsProps
) {
  const { value, onChange } = props;
  const { t } = useTranslation("articles");

  const typeTabs = useMemo<ITabItem<EArticleType>[]>(
    () => [
      { value: EArticleType.ALL, content: t("Все") },
      { value: EArticleType.IT, content: t("ИТ") },
      { value: EArticleType.SCIENCE, content: t("Наука") },
      { value: EArticleType.ECONOMICS, content: t("Экономика") },
    ],
    [t]
  );

  return (
    <Tabs<EArticleType> tabs={typeTabs} onChange={onChange} value={value} />
  );
});
