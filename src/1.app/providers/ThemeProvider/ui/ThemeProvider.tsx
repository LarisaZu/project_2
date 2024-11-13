import { useState, FC, useMemo } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  THEME,
  ThemeContext,
} from "../../../../6.shared/context/theme/ThemeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME) ?? THEME.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<THEME>(defaultTheme);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
