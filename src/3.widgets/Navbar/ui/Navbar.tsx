import { AppRoute, routePath } from "6.shared/config/routeConfig/routeConfig";
import { classNames } from "6.shared/lib";

import cls from "./Navbar.module.scss";
import { AppLink } from "6.shared/AppLink/AppLink";

export interface INavbarProps {
  className?: string;
}

export const Navbar = (props: INavbarProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.navbar, [className])}>
      <div className={cls["nav-links"]}>
        <AppLink to={routePath[AppRoute.MAIN]}>Главная</AppLink>
        <AppLink to={routePath[AppRoute.ABOUT]}>О сайте</AppLink>
      </div>
    </div>
  );
};
