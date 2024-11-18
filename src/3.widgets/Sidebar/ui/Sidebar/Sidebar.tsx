import { useState } from "react";

import { ThemeSwitcher } from "3.widgets/ThemeSwitcher";
import { classNames } from "6.shared/lib";

import cls from "./Sidebar.module.scss";

interface ISidebarProps {
  className?: string;
}

export const Sidebar = (props: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  const { className } = props;
  return (
    <div
      className={classNames(cls.sidebar, [className], {
        [cls.collapsed]: collapsed,
      })}
    >
      <button onClick={handleCollapse}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        {/* переключ языка */}
      </div>
    </div>
  );
};
