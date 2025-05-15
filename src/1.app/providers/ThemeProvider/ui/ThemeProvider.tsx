import { useState, FC, useMemo, ReactNode } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  THEME,
  ThemeContext,
} from "6.shared/context/theme/ThemeContext";

interface IThemeProviderProps {
  initialTheme?: THEME;
  children?: ReactNode;
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME) ?? THEME.LIGHT;

export const ThemeProvider: FC<IThemeProviderProps> = ({
  children,
  initialTheme,
}) => {
  const [theme, setTheme] = useState<THEME>(initialTheme || defaultTheme);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
