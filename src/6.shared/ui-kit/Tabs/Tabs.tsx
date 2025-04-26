import React, { ReactNode, useCallback } from "react";
import { classNames } from "6.shared/lib";
import { Card } from "../Card/Card";

import cls from "./Tabs.module.scss";

export interface ITabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface ITabsProps<T extends string> {
  className?: string;
  tabs: ITabItem<T>[];
  value: T;
  onChange: (type: T) => void;
}

export const Tabs = function Tabs<T extends string>(props: ITabsProps<T>) {
  const { className, tabs, value, onChange } = props;

  const handleChange = useCallback(
    (type: T) => () => {
      onChange(type);
    },
    [onChange]
  );

  return (
    <div className={classNames(cls.tabs, [className])}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          variant={value === tab.value ? "outline" : "normal"}
          onClick={handleChange(tab.value)}
          className={cls.tab}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
