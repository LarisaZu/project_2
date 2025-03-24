import React, { HTMLAttributes, memo } from "react";
import { classNames } from "6.shared/lib";
import cls from "./Card.module.scss";

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const Card = memo(function Card(props: ICardProps) {
  const { className, children, ...otherProps } = props;

  return (
    <div className={classNames(cls.card, [className])} {...otherProps}>
      {children}
    </div>
  );
});
