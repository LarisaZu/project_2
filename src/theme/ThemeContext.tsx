import { createContext, Dispatch, SetStateAction } from "react";

export enum THEME {
  LIGHT = "light",
  DARK = "dark",
}

interface IThemeContext {
  theme?: THEME;
  setTheme?: Dispatch<SetStateAction<THEME>>;
}

export const LOCAL_STORAGE_THEME_KEY = "theme";

export const ThemeContext = createContext<IThemeContext>({});
