import type { SemanticColor } from './colors/typing';
import type shadow from './shadow';
import type spacing from './spacing';
import type { Typography } from './typography/typing';

export type ThemeMode = 'light' | 'dark';

export default interface Theme {
  mode: ThemeMode;
  semanticColor: SemanticColor;
  typography: Typography;
  spacing: typeof spacing;
  shadow: typeof shadow;
}
