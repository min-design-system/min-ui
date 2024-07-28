import { PropsWithChildren } from 'react';

import GlobalStyle from '@core/setup/GlobalStyle';
import ThemeContext from '@core/setup/ThemeContext';
import { ThemeMode } from '@core/theme/typing';

interface ThemeProviderProps {
  mode: ThemeMode;
  disableGlobalStyle?: boolean;
}

function ThemeProvider({
  children,
  mode,
  disableGlobalStyle
}: PropsWithChildren<ThemeProviderProps>) {
  return (
    <ThemeContext.Provider value={mode}>
      {!disableGlobalStyle && <GlobalStyle globalStyle />}
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
