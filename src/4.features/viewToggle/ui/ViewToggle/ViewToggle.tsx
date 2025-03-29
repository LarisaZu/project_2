import React, { memo } from "react";

import { EArticleView } from "5.entities/Article";
import { classNames } from "6.shared/lib";
import ListIcon from "6.shared/lib/assets/icons/list.svg";
import TileIcon from "6.shared/lib/assets/icons/tiled.svg";
import { Button } from "6.shared/ui-kit/Button/Button";
import { Icon } from "6.shared/ui-kit/Icon/Icon";

import cls from "./ViewToggle.module.scss";

interface IViewToggleProps {
  className?: string;
  view: EArticleView;
  onToggle: (view: EArticleView) => void;
}

const viewTypes = [
  { view: EArticleView.BIG, icon: ListIcon },
  { view: EArticleView.SMALL, icon: TileIcon },
];

export const ViewToggle = memo(function ViewToggle(props: IViewToggleProps) {
  const { className, view, onToggle } = props;

  const handleToggle = (view: EArticleView) => {
    onToggle(view);
  };

  return (
    <div className={classNames(cls.viewToggle, [className])}>
      {viewTypes.map((el) => (
        <Button
          key={el.view}
          variant="clear"
          onClick={() => handleToggle(el.view)}
        >
          <Icon
            Svg={el.icon}
            className={classNames("", [], {
              [cls["not-active"]]: view !== el.view,
            })}
          />
        </Button>
      ))}
    </div>
  );
});
