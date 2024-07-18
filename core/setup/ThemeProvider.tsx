import { PropsWithChildren } from 'react';

import ThemeContext from '@core/setup/ThemeContext';
import { ThemeMode } from '@core/theme/typing';

interface ThemeProviderProps {
  mode: ThemeMode;
}

function ThemeProvider({ children, mode }: PropsWithChildren<ThemeProviderProps>) {
  return <ThemeContext.Provider value={mode}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
