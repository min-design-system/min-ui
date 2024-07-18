import { alpha, blue, gray, green, mint, red } from './colors/base';
import shadow from './shadow';
import spacing from './spacing';
import type Theme from './typing';
import { body, caption, display, heading } from './typography';

const dark: Theme = {
  mode: 'dark',
  semanticColor: {
    contents: {
      primary: green['500'],
      danger: red['500'],
      default: gray['100'],
      neutral: gray['500'],
      inverse: gray['1000'],
      disabled: gray['600'],
      black: gray['1000'],
      white: gray['100'],
      whiteWeek: alpha.white600,
      colorMint: mint['500'],
      colorBlue: blue['500']
    },
    background: {
      default: gray['1000'],
      strong: gray['900'],
      dark: gray['1000']
    },
    surface: {
      primary: green['500'],
      primaryWeak: green['900'],
      danger: red['500'],
      dangerWeak: red['900'],
      default: gray['1000'],
      strong: gray['100'],
      disabled: gray['800'],
      inverse: gray['100'],
      neutral: gray['500'],
      colorMint: mint['500'],
      colorMintWeak: mint['900'],
      colorBlue: blue['500'],
      colorBlueWeak: blue['900']
    },
    border: {
      danger: red['500'],
      default: gray['700'],
      weak: gray['800'],
      strong: gray['100'],
      neutral: gray['500'],
      none: alpha.none
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
