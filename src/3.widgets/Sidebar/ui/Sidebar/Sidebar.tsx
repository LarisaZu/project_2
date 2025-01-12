import { useState } from "react";
import { useTranslation } from "react-i18next";

import { ThemeSwitcher } from "3.widgets/ThemeSwitcher";
import { LangSwitcher } from "3.widgets/LangSwitcher";
import { classNames } from "6.shared/lib";

import cls from "./Sidebar.module.scss";

interface ISidebarProps {
  className?: string;
}

export const Sidebar = (props: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

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
      <button data-testid="sidebar-toggle" onClick={handleCollapse}>
        {t("Тогл")}
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
