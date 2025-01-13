import { useState } from "react";
import { useLocation } from "react-router-dom";
import { AppRoute, routePath } from "6.shared/config/routeConfig/routeConfig";
import { useTranslation } from "react-i18next";

import { ThemeSwitcher } from "3.widgets/ThemeSwitcher";
import { LangSwitcher } from "3.widgets/LangSwitcher";
import { classNames } from "6.shared/lib";
import HomeIcon from "6.shared/lib/assets/icons/home-icon.svg";
import AboutIcon from "6.shared/lib/assets/icons/about-icon.svg";
import { Button } from "6.shared/ui-kit/Button/Button";
import { AppLink } from "6.shared/ui-kit/AppLink/AppLink";

import cls from "./Sidebar.module.scss";

interface ISidebarProps {
  className?: string;
}

export const Sidebar = (props: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const location = useLocation();

  const isLinkActive = (path: string) => {
    return location.pathname === path;
  };

  const { t } = useTranslation();

  const handleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  const { className } = props;
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, [className], {
        [cls.collapsed]: collapsed,
      })}
    >
      <div className={cls.items}>
        <AppLink
          to={routePath[AppRoute.MAIN]}
          className={classNames(cls.item, [], {
            [cls.active]: isLinkActive(routePath[AppRoute.MAIN]),
          })}
        >
          <span>
            <HomeIcon />
          </span>
          <span className={cls.link}>{t(`pages.Главная`)}</span>
        </AppLink>
        <AppLink
          to={routePath[AppRoute.ABOUT]}
          className={classNames(cls.item, [], {
            [cls.active]: isLinkActive(routePath[AppRoute.ABOUT]),
          })}
        >
          <span>
            <AboutIcon />
          </span>
          <span className={cls.link}>{t(`pages.О сайте`)}</span>
        </AppLink>
      </div>

      <Button
        data-testid="sidebar-toggle"
        className={cls.collapsedBtn}
        variant="filledInverted"
        onClick={handleCollapse}
        square
        size="size_xl"
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div
        className={classNames(cls.switchers, [], {
          [cls.collapsed]: collapsed,
        })}
      >
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
