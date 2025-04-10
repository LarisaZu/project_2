import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { ViewToggle } from "4.features/viewToggle";
import { ArticlesList, EArticleView } from "5.entities/Article";
import { Text } from "6.shared/ui-kit/Text/Text";
import { useAppDispatch, useInitialEffect } from "6.shared/lib/hooks";
import {
  DynamicModuleLoader,
  TReducersList,
} from "6.shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Page } from "6.shared/ui-kit/Page/Page";
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from "../model/slice/articlesPageSlice";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../model/selectors/articlesPageSelectors";
import { fetchNextArticlesPage } from "../model/api/fetchNextArticlesPage/fetchNextArticlesPage";
import { initArticlesPage } from "../model/api/initArticlesPage/initArticlesPage";
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

  const { t } = useTranslation("articles");

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  const handleLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  const handleViewChange = useCallback(
    (view: EArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  // const articles = new Array(16)
  //   .fill(0)
  //   .map((art, idx) => ({ ...data, id: String(idx) }));

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={handleLoadNextPart}>
        <Text title={t("Статьи")} />

        <div className={cls.view}>
          <div className=""></div>
          <ViewToggle view={view} onToggle={handleViewChange} />
        </div>

        <ArticlesList isLoading={isLoading} articles={articles} view={view} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
