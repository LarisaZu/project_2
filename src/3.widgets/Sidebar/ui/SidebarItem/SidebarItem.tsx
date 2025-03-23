import { memo } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { getUserAuthState } from "5.entities/User";
import { classNames } from "6.shared/lib";
import { AppLink } from "6.shared/ui-kit/AppLink/AppLink";

import { ISidebarItem } from "../../model/types/sidebar";
import cls from "./SidebarItem.module.scss";

interface ISidebarItemProps {
  item: ISidebarItem;
  collapsed: boolean;
}

export const SidebarItem = memo(function SidebarItem(props: ISidebarItemProps) {
  const { item, collapsed } = props;
  const isAuth = useSelector(getUserAuthState);

  const { t } = useTranslation();

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      to={item.path}
      active={item.active}
      className={classNames(cls.item, [], { [cls.collapsed]: collapsed })}
    >
      <span>
        <item.Icon />
      </span>
      <span className={cls.link}>{t(`pages.${[item.title]}`)}</span>
    </AppLink>
  );
});
