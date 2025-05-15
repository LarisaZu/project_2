import React, { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { ArticlesTypeTabs } from "4.features/articlesTypeTabs";
import { ArticlesSortSelector } from "4.features/articlesSortSelector";
import { Card } from "6.shared/ui-kit/Card/Card";
import { TSortOrder } from "6.shared/types";
import { classNames } from "6.shared/lib";
import { useAppDispatch, useDebounce } from "6.shared/lib/hooks";
import { Input } from "6.shared/ui-kit/Input/Input";
import { articlesPageActions } from "../../model/slice/articlesPageSlice";
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import {
  EArticleSortField,
  EArticleView,
  EArticleType,
} from "5.entities/Article";
import { fetchArticles } from "../../model/api/fetchArticles/fetchArticles";

import cls from "./ArticlesPageFilters.module.scss";

interface IArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = memo(function ArticlesPageFilters(
  props: IArticlesPageFiltersProps
) {
  const { className } = props;

  const view = useSelector(getArticlesPageView);
  const order = useSelector(getArticlesPageOrder);
  const sort = useSelector(getArticlesPageSort);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const { t } = useTranslation("articles");

  const dispatch = useAppDispatch();

  const fetchData = useCallback(() => {
    dispatch(fetchArticles({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const handleSearchChange = useCallback(
    (value: string) => {
      dispatch(articlesPageActions.setSearch(value));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData]
  );

  const handleOrderChange = useCallback(
    (value: TSortOrder) => {
      dispatch(articlesPageActions.setOrder(value));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  const handleViewChange = useCallback(
    (view: EArticleView) => {
      dispatch(articlesPageActions.setView(view));
      dispatch(articlesPageActions.setPage(1));
    },
    [dispatch]
  );

  const handleSortChange = useCallback(
    (value: EArticleSortField) => {
      dispatch(articlesPageActions.setSort(value));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  const handleTypeChange = useCallback(
    (type: EArticleType) => {
      dispatch(articlesPageActions.setType(type));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  return (
    <div className={classNames(cls.articlesPageFilters, [className])}>
      <ArticlesSortSelector
        view={view}
        order={order}
        sort={sort}
        onChangeSort={handleSortChange}
        onChangeOrder={handleOrderChange}
        onChangeView={handleViewChange}
      />

      <Card>
        <Input
          id="search"
          value={search}
          onChange={handleSearchChange}
          label={t("Поиск")}
        />
      </Card>

      <ArticlesTypeTabs value={type} onChange={handleTypeChange} />
    </div>
  );
});
