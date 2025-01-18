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
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
};
