import React, { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { ViewToggle } from "4.features/viewToggle";
import { ISelectOption, Select } from "6.shared/ui-kit/Select/Select";
import { classNames } from "6.shared/lib";
import { TSortOrder } from "6.shared/types";
import { EArticleView, EArticleSortField } from "5.entities/Article";

import cls from "./ArticlesSortSelector.module.scss";

interface IArticlesSortSelectorProps {
  className?: string;
  sort: EArticleSortField;
  order: TSortOrder;
  view: EArticleView;
  onChangeSort: (newSort: EArticleSortField) => void;
  onChangeOrder: (newOrder: TSortOrder) => void;
  onChangeView: (newView: EArticleView) => void;
}

export const ArticlesSortSelector = memo(function ArticlesSortSelector(
  props: IArticlesSortSelectorProps
) {
  const {
    className,
    sort,
    order,
    view,
    onChangeOrder,
    onChangeSort,
    onChangeView,
  } = props;

  const { t } = useTranslation("articles");

  const sortOptions = useMemo<ISelectOption<EArticleSortField>[]>(
    () => [
      { label: t("Просмотрам"), value: EArticleSortField.VIEWS },
      { label: t("Названию"), value: EArticleSortField.TITLE },
      { label: t("Дате создания"), value: EArticleSortField.CREATED },
    ],
    [t]
  );

  const orderOptions = useMemo<ISelectOption<TSortOrder>[]>(
    () => [
      { label: t("Возрастанию"), value: "asc" },
      { label: t("Убыванию"), value: "desc" },
    ],
    [t]
  );

  return (
    <div className={classNames(cls.wrapper, [className])}>
      <Select<EArticleSortField>
        className={classNames("", [className])}
        label={t("Сортировать ПО")}
        options={sortOptions}
        value={sort}
        onChange={onChangeSort}
      />
      <Select<TSortOrder>
        className={classNames("", [className])}
        label={t("по")}
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
      />

      <ViewToggle view={view} onToggle={onChangeView} className={cls.view} />
    </div>
  );
});
