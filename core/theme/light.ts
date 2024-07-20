import { alpha, blue, gray, green, mint, red } from './colors/base';
import shadow from './shadow';
import spacing from './spacing';
import Theme from './typing';
import { body, caption, display, heading } from './typography';

const light: Theme = {
  mode: 'light',
  semanticColor: {
    contents: {
      primary: green['500'],
      danger: red['500'],
      default: gray['900'],
      neutral: gray['500'],
      inverse: gray['0'],
      disabled: gray['400'],
      black: gray['900'],
      white: gray['0'],
      whiteWeek: alpha.white600,
      colorMint: mint['500'],
      colorBlue: blue['500']
    },
    background: {
      default: gray['0'],
      strong: gray['100'],
      dark: gray['900']
    },
    surface: {
      primary: green['500'],
      primaryWeak: green['100'],
      danger: red['500'],
      dangerWeak: red['100'],
      default: gray['0'],
      strong: gray['100'],
      disabled: gray['200'],
      inverse: gray['900'],
      neutral: gray['500'],
      colorMint: mint['500'],
      colorMintWeak: mint['100'],
      colorBlue: blue['500'],
      colorBlueWeak: blue['100']
    },
    border: {
      danger: red['500'],
      default: gray['300'],
      weak: gray['200'],
      strong: gray['900'],
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

export default light;
