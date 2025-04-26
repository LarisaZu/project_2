import { memo, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Page } from "3.widgets/Page/Page";
import { ArticlesList } from "5.entities/Article";
import { useAppDispatch, useInitialEffect } from "6.shared/lib/hooks";
import {
  DynamicModuleLoader,
  TReducersList,
} from "6.shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  articlesPageReducer,
  getArticles,
} from "../../model/slice/articlesPageSlice";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { fetchNextArticlesPage } from "../../model/api/fetchNextArticlesPage/fetchNextArticlesPage";
import { initArticlesPage } from "../../model/api/initArticlesPage/initArticlesPage";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";
import cls from "./ArticlesPage.module.scss";

const reducers: TReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  const articles = useSelector(getArticles.selectAll);
  const [searchParams] = useSearchParams();

  const { t } = useTranslation("articles");

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  const handleLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  // const articles = new Array(16)
  //   .fill(0)
  //   .map((art, idx) => ({ ...data, id: String(idx) }));

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={handleLoadNextPart}>
        {/* <Text title={t("Статьи")} /> */}

        <ArticlesPageFilters />

        <ArticlesList isLoading={isLoading} articles={articles} view={view} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
