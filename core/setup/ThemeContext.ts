import { createContext } from 'react';

import { ThemeMode } from '@core/theme/typing';

const ThemeContext = createContext<ThemeMode>('light');

export default ThemeContext;
