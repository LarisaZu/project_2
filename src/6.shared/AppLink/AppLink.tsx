import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

import { classNames } from "6.shared/lib";
import cls from "./AppLink.module.scss";

export type TAppLinkVariant = "primary" | "inverted";

interface IAppLinkProps extends LinkProps {
  className?: string;
  variant?: TAppLinkVariant;
}

export const AppLink: FC<IAppLinkProps> = (props) => {
  const { to, className, children, variant = "primary", ...otherProps } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.appLink, [className, cls[variant]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
