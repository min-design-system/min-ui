import { CSSValue } from '@core/theme/colors/base/typing';

export type TypographySize =
  | 'small'
  | `small${'Strong' | 'Stronger'}`
  | 'medium'
  | `medium${'Strong' | 'Stronger'}`
  | 'large'
  | `large${'Strong' | 'Stronger'}`;
export type TypographyWeight = 400 | 500 | 600 | 700 | 800;
export type TypographyLineHeight = {
  default: number;
};

export type TypographyContent = {
  tag: `h${1 | 2 | 3 | 4 | 5}` | 'div' | 'span';
  size: CSSValue;
  weight: TypographyWeight;
  lineHeight: TypographyLineHeight;
};

export type TypographyDisplay = Record<
  Extract<TypographySize, 'small' | 'medium' | 'large'>,
  TypographyContent
>;
export type TypographyHeading = Record<
  Extract<TypographySize, 'small' | 'medium' | 'large'>,
  TypographyContent
>;
export type TypographyBody = Record<TypographySize, TypographyContent>;
export type TypographyCaption = Record<
  Exclude<TypographySize, 'largeStronger' | 'mediumStronger' | 'smallStronger'>,
  TypographyContent
>;

export type Typography = {
  display: TypographyDisplay;
  heading: TypographyHeading;
  body: TypographyBody;
  caption: TypographyCaption;
};
