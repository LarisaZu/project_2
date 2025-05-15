import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { classNames } from "6.shared/lib";
import { Page } from "3.widgets/Page/Page";

interface IArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo(function ArticleEditPage(
  props: IArticleEditPageProps
) {
  const { className } = props;
  const { articleId } = useParams<{ articleId: string }>();

  const isEdit = Boolean(articleId);

  const { t } = useTranslation();

  return (
    <Page>
      <div className={classNames("", [className])}>
        {isEdit ? `Article Edit #${articleId}` : "Create New Article"}
      </div>
    </Page>
  );
});

export default ArticleEditPage;
