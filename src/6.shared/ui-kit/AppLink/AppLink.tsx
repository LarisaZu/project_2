import { memo, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

import { classNames } from "6.shared/lib";
import cls from "./AppLink.module.scss";

export type TAppLinkVariant = "primary" | "inverted";

interface IAppLinkProps extends LinkProps {
  className?: string;
  variant?: TAppLinkVariant;
  active?: boolean;
  children: ReactNode;
}

export const AppLink = memo(function AppLink(props: IAppLinkProps) {
  const {
    to,
    className,
    children,
    variant = "primary",
    active = false,
    ...otherProps
  } = props;

  const mods = { [cls.active]: active };
  return (
    <Link
      to={to}
      className={classNames(cls.appLink, [className, cls[variant]], mods)}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
