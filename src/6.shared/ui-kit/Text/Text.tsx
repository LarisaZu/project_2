import { classNames } from "6.shared/lib";
import cls from "./Text.module.scss";

export enum EText {
  PRIMARY = "primary",
  ERROR = "error",
}

interface ITextProps {
  className?: string;
  text?: string;
  title?: string;
  variant?: `${EText}`;
}

export const Text = (props: ITextProps) => {
  const { className, text, title, variant = EText.PRIMARY } = props;

  return (
    <div className={classNames(cls.textWrapper, [className, cls[variant]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
