import { classNames } from "6.shared/lib";

import cls from "./Navbar.module.scss";

export interface INavbarProps {
  className?: string;
}

export const Navbar = (props: INavbarProps) => {
  const { className } = props;

  return <div className={classNames(cls.navbar, [className])}></div>;
};
