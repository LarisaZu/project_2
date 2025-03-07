import { createContext, Dispatch, SetStateAction } from "react";

export enum THEME {
  LIGHT = "app_light_theme",
  DARK = "app_dark_theme",
  RED = "app_red_theme",
}

interface IThemeContext {
  theme?: THEME;
  setTheme?: Dispatch<SetStateAction<THEME>>;
}

export const LOCAL_STORAGE_THEME_KEY = "theme";

export const ThemeContext = createContext<IThemeContext>({});
