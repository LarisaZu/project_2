import { memo } from "react";

import ThemeLight from "6.shared/lib/assets/icons/theme-light.svg";
import ThemeDark from "6.shared/lib/assets/icons/theme-dark.svg";
import { THEME } from "6.shared/context/theme/ThemeContext";
import { Button } from "6.shared/ui-kit/Button/Button";
import { classNames, useTheme } from "6.shared/lib";

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(function ThemeSwitcher(
  props: IThemeSwitcherProps
) {
  const { theme, toggleTheme } = useTheme();

  const { className } = props;
  return (
    <Button
      className={classNames("", [className])}
      variant="clear"
      onClick={toggleTheme}
    >
      {theme === THEME.DARK ? <ThemeDark /> : <ThemeLight />}
    </Button>
  );
});
