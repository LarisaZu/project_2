import React, { memo } from "react";
import { classNames } from "6.shared/lib";
import cls from "./Icon.module.scss";

interface IIconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo(function Icon(props: IIconProps) {
  const { className, Svg } = props;

  return <Svg className={classNames(cls.icon, [className])} />;
});
