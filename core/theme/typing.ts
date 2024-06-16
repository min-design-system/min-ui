import type { Palette } from './tokens/palette/typing';
import type shadow from './tokens/shadow';
import type spacing from './tokens/spacing';
import type { Typography } from './tokens/typography/typing';

export default interface Theme {
  mode: 'light' | 'dark';
  palette: Palette;
  typography: Typography;
  spacing: typeof spacing;
  shadow: typeof shadow;
}
