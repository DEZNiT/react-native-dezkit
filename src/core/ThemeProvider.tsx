import React, { useContext, useMemo } from 'react';
import merge from 'deepmerge';

type ThemeProviderTypes<T> = {
  children?: React.ReactNode;
  theme: T;
};

type DefaultThemeType = {
  dark: boolean;
  colors: {
    primary: string;
    // secondary: string;
    success: string;
    accent: string;
    danger: string;
    warning: string;
    background: string;
    textLight: string;
    textDark: string;
    disabled: string;
    muted: string;
  };
  borderWidth: number;
};

const createTheme = <T extends DefaultThemeType>(defaultTheme: T) => {
  const ThemeContext = React.createContext(defaultTheme);

  const ThemeProvider = ({ children, theme }: ThemeProviderTypes<T>) => {
    return (
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
  };

  const useTheme = (providedTheme?: T) => {
    const theme = useContext(ThemeContext);

    const output = useMemo(
      () =>
        theme && providedTheme
          ? merge(theme, providedTheme)
          : theme || providedTheme,
      [theme, providedTheme]
    );

    return output;
  };

  return { ThemeProvider, useTheme };
};

export default createTheme;
