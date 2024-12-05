import { useTranslation } from "react-i18next";

import { Button } from "6.shared/ui-kit/Button/Button";

import { classNames } from "6.shared/lib";
import cls from "./PageError.module.scss";

interface IPageErrorProps {
  className?: string;
}

export const PageError = (props: IPageErrorProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const handleRefresh = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.pageError, [className])}>
      <h1>{t("Что-то пошло не так")}</h1>
      <Button onClick={handleRefresh}>{t("Обновить страницу")}</Button>
    </div>
  );
};
