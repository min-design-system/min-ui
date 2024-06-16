import { CSSValue } from '@core/theme/tokens/palette/colors/typing';

export type TypographySize = 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | 'xxLarge';
export type TypographyWeight = 400 | 500 | 600 | 700 | 800;
export type TypographyLineHeight = {
  default: CSSValue;
  article: CSSValue;
};

export type TypographyContent = {
  tag: `h${1 | 2 | 3 | 4 | 5}` | 'div' | 'span';
  size: CSSValue;
  weight: TypographyWeight;
  lineHeight: TypographyLineHeight;
};

export type TypographyDisplay = Record<Exclude<TypographySize, 'xSmall'>, TypographyContent>;
export type TypographyHeading = Record<Exclude<TypographySize, 'xxLarge'>, TypographyContent>;
export type TypographyBody = Record<
  Exclude<TypographySize, 'xxLarge' | 'xLarge'>,
  TypographyContent
>;
export type TypographyCaption = Record<
  Exclude<TypographySize, 'xxLarge' | 'xLarge'>,
  TypographyContent
>;

export type Typography = {
  display: TypographyDisplay;
  heading: TypographyHeading;
  body: TypographyBody;
  caption: TypographyCaption;
};
