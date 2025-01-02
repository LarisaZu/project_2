import { useTranslation } from "react-i18next";
import { AppRoute, routePath } from "6.shared/config/routeConfig/routeConfig";

import { AppLink } from "6.shared/ui-kit/AppLink/AppLink";

import { classNames } from "6.shared/lib";

import cls from "./Navbar.module.scss";

export interface INavbarProps {
  className?: string;
}

export const Navbar = (props: INavbarProps) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, [className])}>
      <div className={cls["nav-links"]}>
        <AppLink to={routePath[AppRoute.MAIN]}>{t(`pages.Главная`)}</AppLink>
        <AppLink to={routePath[AppRoute.ABOUT]}>{t(`pages.О сайте`)}</AppLink>
      </div>
    </div>
  );
};
