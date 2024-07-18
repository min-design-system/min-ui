import { useContext } from 'react';

import ThemeContext from '@core/setup/ThemeContext';
import dark from '@core/theme/dark';
import light from '@core/theme/light';

export default function useTheme() {
  const mode = useContext(ThemeContext);

  return mode === 'dark' ? light : dark;
}
