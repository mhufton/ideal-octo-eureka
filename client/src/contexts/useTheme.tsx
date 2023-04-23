import React, { createContext, useContext } from 'react';
import { ThemeProvider as ThemeProviderComponent } from 'styled-components';

type Theme = {
  primary: string;
  secondary: string;
  cardBg: string,
  buttonColor: string,
  textColor: string
};

type ThemeContextType = {
  theme: Theme;
};

const theme = {
  primary: '#000000',
  secondary: '#ffffff',
  cardBg: '#EAEAEA',
  buttonColor: '#008886',
  textColor: '#252A34'
}

const ThemeContext = createContext<ThemeContextType>({
  theme,
});

export const useTheme = () => useContext(ThemeContext);


type ThemeProviderProps = {
  children: React.ReactNode;
  theme: Theme;
};

/** holds the theming colours to ensure consistency */
export const ThemeProvider = ({ children }: ThemeProviderProps) => {

  const value: ThemeContextType = { theme }

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProviderComponent theme={theme}>
        {children}
      </ThemeProviderComponent>
    </ThemeContext.Provider>
  );
};
