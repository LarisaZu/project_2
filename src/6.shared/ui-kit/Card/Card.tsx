import React, { HTMLAttributes, memo } from "react";
import { classNames } from "6.shared/lib";

import cls from "./Card.module.scss";

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  variant?: "outline" | "normal";
}

export const Card = memo(function Card(props: ICardProps) {
  const { className, children, variant = "normal", ...otherProps } = props;

  return (
    <div
      className={classNames(cls.card, [className, cls[variant]])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
