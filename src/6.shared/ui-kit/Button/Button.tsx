import { ButtonHTMLAttributes, memo } from "react";
import { classNames, TMods } from "6.shared/lib";
import cls from "./Button.module.scss";

export enum EButtonVariant {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
  OUTLINE_RED = "outline_red",
  FILLED = "filled",
  FILLED_INVERTED = "filledInverted",
}

export enum EButtonSize {
  m = "size_m",
  l = "size_l",
  xl = "size_xl",
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: `${EButtonVariant}`;
  size?: `${EButtonSize}`;
  square?: boolean;
  disabled?: boolean;
}

export const Button = memo(function Button(props: IButtonProps) {
  const {
    className,
    children,
    variant = "outline",
    square,
    size = "size_l",
    disabled,
    ...otherProps
  } = props;

  const mods: TMods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  };
  return (
    <button
      className={classNames(
        cls.button,
        [className, cls[variant], cls[size]],
        mods
      )}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
