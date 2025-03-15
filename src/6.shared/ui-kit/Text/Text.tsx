import { memo } from "react";

import { classNames } from "6.shared/lib";

import cls from "./Text.module.scss";

export enum EText {
  PRIMARY = "primary",
  ERROR = "error",
}

export enum ETextSize {
  M = "size_m",
  L = "size_l",
}

type TTextAlign = "left" | "right" | "center";

interface ITextProps {
  className?: string;
  text?: string;
  title?: string;
  variant?: `${EText}`;
  align?: TTextAlign;
  size?: `${ETextSize}`;
}

export const Text = memo(function Text(props: ITextProps) {
  const {
    className,
    text,
    title,
    variant = EText.PRIMARY,
    align = "left",
    size = "size_m",
  } = props;

  return (
    <div
      className={classNames(cls.textWrapper, [
        className,
        cls[variant],
        cls[align],
        cls[size],
      ])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
