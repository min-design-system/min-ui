import { alpha, blue, gray, green, mint, red } from '@core/theme/tokens/palette/colors';
import shadow from '@core/theme/tokens/shadow';
import spacing from '@core/theme/tokens/spacing';
import { body, caption, display, heading } from '@core/theme/tokens/typography';
import type Theme from '@core/theme/typing';

const light: Theme = {
  mode: 'light',
  palette: {
    content: {
      primary: blue['500'],
      secondary: green['500'],
      tertiary: mint['500'],
      danger: red['500'],
      default: gray['900'],
      neutral: gray['500'],
      inverse: gray['0'],
      disabled: gray['400'],
      black: gray['900'],
      white: gray['0']
    },
    background: {
      default: gray['0'],
      strong: gray['100']
    },
    surface: {
      primary: blue['500'],
      primaryWeak: blue['100'],
      secondary: green['500'],
      secondaryWeak: green['100'],
      tertiary: mint['500'],
      tertiaryWeak: mint['100'],
      danger: red['500'],
      dangerWeak: red['100'],
      default: gray['0'],
      strong: gray['100'],
      disabled: gray['200'],
      inverse: gray['900'],
      white: gray['0'],
      whiteWeak: alpha.white20
    },
    border: {
      primary: blue['500'],
      primaryWeak: blue['300'],
      secondary: green['500'],
      secondaryWeak: green['300'],
      tertiary: mint['500'],
      tertiaryWeak: mint['300'],
      danger: red['500'],
      dangerWeak: red['300'],
      default: gray['300'],
      weak: gray['200'],
      strong: gray['900'],
      neutral: gray['500'],
      none: alpha.none,
      white: gray['0']
    }
  },
  typography: {
    display,
    heading,
    body,
    caption
  },
  spacing,
  shadow
};

export default light;
