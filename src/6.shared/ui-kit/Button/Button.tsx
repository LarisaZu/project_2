import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "6.shared/lib";
import cls from "./Button.module.scss";

export type TButtonVariant = "clear" | "outline";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: TButtonVariant;
}

export const Button: FC<IButtonProps> = (props: IButtonProps) => {
  const { className, children, variant, ...otherProps } = props;

  return (
    <button
      className={classNames(cls.button, [className, cls[variant]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
