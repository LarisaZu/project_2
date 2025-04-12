import { useTranslation } from "react-i18next";

import { Page } from "3.widgets/Page/Page";
import { classNames } from "6.shared/lib";
import cls from "./NotFoundPage.module.scss";

interface INotFoundPageProps {
  className?: string;
}

export const NotFoundPage = (props: INotFoundPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page className={classNames(cls.notFoundPage, [className])}>
      {t("Страница не найдена")}
    </Page>
  );
};
