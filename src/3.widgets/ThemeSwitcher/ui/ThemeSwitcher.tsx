import { classNames, useTheme } from "6.shared/lib";
import ThemeLight from "6.shared/lib/assets/icons/theme-light.svg";
import ThemeDark from "6.shared/lib/assets/icons/theme-dark.svg";
import { THEME } from "6.shared/context/theme/ThemeContext";

import cls from "./ThemeSwitcher.module.scss";

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: IThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  const { className } = props;
  return (
    <button
      className={classNames(cls.themeSwitcher, [className])}
      onClick={toggleTheme}
    >
      {theme === THEME.DARK ? <ThemeLight /> : <ThemeDark />}
    </button>
  );
};
