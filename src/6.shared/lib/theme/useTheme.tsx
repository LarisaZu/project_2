import { useContext, useEffect } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  THEME,
  ThemeContext,
} from "../../context/theme/ThemeContext";

interface IThemeResult {
  theme: THEME;
  toggleTheme: () => void;
}

export const useTheme = (): IThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme || THEME.LIGHT;
  }, [theme]);

  const toggleTheme = () => {
    let newTheme: THEME;

    switch (theme) {
      case THEME.LIGHT:
        newTheme = THEME.RED;
        break;
      case THEME.RED:
        newTheme = THEME.DARK;
        break;
      case THEME.DARK:
        newTheme = THEME.LIGHT;
        break;

      default:
        newTheme = THEME.LIGHT;
        break;
    }
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: theme || THEME.LIGHT, toggleTheme };
};
