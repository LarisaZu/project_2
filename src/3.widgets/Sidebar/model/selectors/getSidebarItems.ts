import { getUserAuthState } from "5.entities/User";
import { createSelector } from "@reduxjs/toolkit";

import HomeIcon from "6.shared/lib/assets/icons/home-icon.svg";
import ProfileIcon from "6.shared/lib/assets/icons/profile.svg";
import ArticleIcon from "6.shared/lib/assets/icons/article.svg";
import AboutIcon from "6.shared/lib/assets/icons/about-icon.svg";
import { AppRoute, routePath } from "6.shared/config/routeConfig/routeConfig";
import { ISidebarItem } from "../types/sidebar";

export const getSidebarItems = createSelector(getUserAuthState, (userData) => {
  const sidebarItemsList: ISidebarItem[] = [
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
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        title: "Профиль",
        path: routePath[AppRoute.PROFILE] + userData.id,
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
      }
    );
  }

  return sidebarItemsList;
});
