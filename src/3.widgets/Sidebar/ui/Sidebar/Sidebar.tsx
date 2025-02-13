import { useState, memo } from "react";
import { useLocation } from "react-router-dom";

import { ThemeSwitcher } from "3.widgets/ThemeSwitcher";
import { LangSwitcher } from "3.widgets/LangSwitcher";
import { classNames } from "6.shared/lib";
import { Button } from "6.shared/ui-kit/Button/Button";

import { sidebarItemsList } from "../../model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";

import cls from "./Sidebar.module.scss";

interface ISidebarProps {
  className?: string;
}

export const Sidebar = memo(function Sidebar(props: ISidebarProps) {
  const { className } = props;

  const [collapsed, setCollapsed] = useState(false);

  const location = useLocation();

  const isLinkActive = (path: string) => {
    return location.pathname === path;
  };

  const handleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, [className], {
        [cls.collapsed]: collapsed,
      })}
    >
      <div className={cls.items}>
        {sidebarItemsList.map((item) => (
          <SidebarItem
            key={item.path}
            collapsed={collapsed}
            item={{ ...item, active: isLinkActive(item.path) }}
          />
        ))}
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
});
