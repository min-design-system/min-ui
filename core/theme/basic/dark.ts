import { alpha, blue, gray, green, mint, red } from '@core/theme/tokens/palette/colors';
import shadow from '@core/theme/tokens/shadow';
import spacing from '@core/theme/tokens/spacing';
import { body, caption, display, heading } from '@core/theme/tokens/typography';
import type Theme from '@core/theme/typing';

const dark: Theme = {
  mode: 'dark',
  palette: {
    content: {
      primary: blue['500'],
      secondary: green['500'],
      tertiary: mint['500'],
      danger: red['500'],
      default: gray['100'],
      neutral: gray['500'],
      inverse: gray['1000'],
      disabled: gray['600'],
      black: gray['1000'],
      white: gray['0']
    },
    background: {
      default: gray['1000'],
      strong: gray['900']
    },
    surface: {
      primary: blue['500'],
      primaryWeak: blue['900'],
      secondary: green['500'],
      secondaryWeak: green['900'],
      tertiary: mint['500'],
      tertiaryWeak: mint['900'],
      danger: red['500'],
      dangerWeak: red['900'],
      default: gray['1000'],
      strong: gray['900'],
      disabled: gray['800'],
      inverse: gray['100'],
      white: gray['100'],
      whiteWeak: alpha.white20
    },
    border: {
      primary: blue['500'],
      primaryWeak: blue['700'],
      secondary: green['500'],
      secondaryWeak: green['700'],
      tertiary: mint['500'],
      tertiaryWeak: mint['700'],
      danger: red['500'],
      dangerWeak: red['700'],
      default: gray['700'],
      weak: gray['800'],
      strong: gray['100'],
      neutral: gray['500'],
      none: alpha.none,
      white: gray['100']
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

export default dark;
