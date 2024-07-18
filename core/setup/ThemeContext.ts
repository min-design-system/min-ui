import { createContext } from 'react';

import type { ThemeMode } from '@core/theme/typing';

const ThemeContext = createContext<ThemeMode>('light');

export default ThemeContext;
