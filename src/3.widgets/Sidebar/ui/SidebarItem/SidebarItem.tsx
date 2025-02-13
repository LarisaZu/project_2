import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "6.shared/lib";
import { AppLink } from "6.shared/ui-kit/AppLink/AppLink";

import { ISidebarItem } from "../../model/items";
import cls from "./SidebarItem.module.scss";

interface ISidebarItemProps {
  item: ISidebarItem;
  collapsed: boolean;
}

export const SidebarItem = memo(function SidebarItem(props: ISidebarItemProps) {
  const { item, collapsed } = props;

  const { t } = useTranslation();

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
