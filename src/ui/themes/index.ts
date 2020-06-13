import React from 'react';
import { observable } from 'mobx';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const getTheme = (localItem: string | null): Theme => {
  if (localItem === Theme.LIGHT) {
    return Theme.LIGHT;
  }
  else if (localItem === Theme.DARK) {
    return Theme.DARK;
  }
  else {
    return Theme.DARK;
  }
};

export const GlobalThemeStore = observable.box(getTheme(localStorage.getItem('swoppy-theme')));
export const ThemeContext = React.createContext(getTheme(localStorage.getItem('swoppy-theme')));
export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export type ThemedStyles<K extends {}> = Record<Theme, K>;

export function useStyles<K>(themedStyles: ThemedStyles<K>): K {
  const theme = React.useContext(ThemeContext);
  return themedStyles[theme];
}