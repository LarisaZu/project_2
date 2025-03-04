import { memo } from "react";

import { classNames } from "6.shared/lib";

import cls from "./Text.module.scss";

export enum EText {
  PRIMARY = "primary",
  ERROR = "error",
}

type TTextAlign = "left" | "right" | "center";

interface ITextProps {
  className?: string;
  text?: string;
  title?: string;
  variant?: `${EText}`;
  align?: TTextAlign;
}

export const Text = memo(function Text(props: ITextProps) {
  const {
    className,
    text,
    title,
    variant = EText.PRIMARY,
    align = "left",
  } = props;

  return (
    <div
      className={classNames(cls.textWrapper, [
        className,
        cls[variant],
        cls[align],
      ])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
