import { classNames, useTheme } from "6.shared/lib";
import ThemeLight from "6.shared/lib/assets/icons/theme-light.svg";
import ThemeDark from "6.shared/lib/assets/icons/theme-dark.svg";
import { THEME } from "6.shared/context/theme/ThemeContext";
import { Button } from "6.shared/ui-kit/Button/Button";

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: IThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  const { className } = props;
  return (
    <Button className={classNames("", [className])} onClick={toggleTheme}>
      {theme === THEME.DARK ? <ThemeDark /> : <ThemeLight />}
    </Button>
  );
};
