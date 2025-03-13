import React from "react";
import HomeIcon from "6.shared/lib/assets/icons/home-icon.svg";
import ProfileIcon from "6.shared/lib/assets/icons/profile.svg";
import ArticleIcon from "6.shared/lib/assets/icons/article.svg";
import AboutIcon from "6.shared/lib/assets/icons/about-icon.svg";
import { AppRoute, routePath } from "6.shared/config/routeConfig/routeConfig";

export interface ISidebarItem {
  path: string;
  title: string;
  active: boolean;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const sidebarItemsList: ISidebarItem[] = [
  {
    title: "Главная",
    path: routePath[AppRoute.MAIN],
    Icon: HomeIcon,
    active: false,
  },
  {
    title: "О сайте",
    path: routePath[AppRoute.ABOUT],
    Icon: AboutIcon,
    active: false,
  },
  {
    title: "Профиль",
    path: routePath[AppRoute.PROFILE],
    Icon: ProfileIcon,
    active: false,
    authOnly: true,
  },
  {
    title: "Статьи",
    path: routePath[AppRoute.ARTICLES],
    Icon: ArticleIcon,
    active: false,
    authOnly: true,
  },
];
