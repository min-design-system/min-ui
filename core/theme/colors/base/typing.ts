import type { Property } from 'csstype';

export type RGB = `rgb(${number}, ${number}, ${number})`;
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type HEX = `#${string}`;

export type ColorCode = RGB | RGBA | HEX;
export type ColorValue =
  | ColorCode
  | Property.Color
  | `linear-gradient(${number}deg, ${ColorCode} ${number}%, ${ColorCode} ${number}%)`;

export type AbsoluteUnit = 'cm' | 'mm' | 'in' | 'px' | 'pt' | 'pc';
export type RelativeUnit = 'em' | 'ex' | 'ch' | 'rem' | 'vw' | 'vh' | 'vmin' | 'vmax' | '%';
export type CSSValue =
  | number
  | string
  | `${number}${AbsoluteUnit | RelativeUnit}`
  | 'auto'
  | 'inherit';

export type ColorScaleKey =
  | 'gray'
  | 'alpha'
  | 'red'
  | 'yellow'
  | 'grey'
  | 'green'
  | 'mint'
  | 'blue'
  | 'violet';
export type ColorScaleRange<T = never> = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | T;
export type AlphaColorScaleKey = 'white' | 'black' | 'none';
export type AlphaColorScaleRange = 50 | 200 | 400 | 600 | 800 | 950;
