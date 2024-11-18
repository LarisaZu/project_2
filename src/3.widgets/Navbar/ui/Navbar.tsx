import { AppRoute, routePath } from "6.shared/config/routeConfig/routeConfig";

import { ThemeSwitcher } from "3.widgets/ThemeSwitcher";
import { AppLink } from "6.shared/ui-kit/AppLink/AppLink";

import { classNames } from "6.shared/lib";

import cls from "./Navbar.module.scss";

export interface INavbarProps {
  className?: string;
}

export const Navbar = (props: INavbarProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.navbar, [className])}>
      <ThemeSwitcher />
      <div className={cls["nav-links"]}>
        <AppLink to={routePath[AppRoute.MAIN]}>Главная</AppLink>
        <AppLink to={routePath[AppRoute.ABOUT]}>О сайте</AppLink>
      </div>
    </div>
  );
};
