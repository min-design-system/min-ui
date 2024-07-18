import { AlphaColorScaleKey, AlphaColorScaleRange, CSSValue } from './typing';

const alpha: Record<
  | Extract<AlphaColorScaleKey, 'none'>
  | `${Exclude<AlphaColorScaleKey, 'none'>}${AlphaColorScaleRange}`,
  CSSValue
> = {
  none: '#FFFFFF',
  white50: 'rgba(255, 255, 255, 0.05)',
  white200: 'rgba(255, 255, 255, 0.2)',
  white400: 'rgba(255, 255, 255, 0.4)',
  white600: 'rgba(255, 255, 255, 0.6)',
  white800: 'rgba(255, 255, 255, 0.8)',
  white950: 'rgba(255, 255, 255, 0.95)',
  black50: 'rgba(0, 0, 0, 0.05)',
  black200: 'rgba(0, 0, 0, 0.2)',
  black400: 'rgba(0, 0, 0, 0.4)',
  black600: 'rgba(0, 0, 0, 0.6)',
  black800: 'rgba(0, 0, 0, 0.8)',
  black950: 'rgba(0, 0, 0, 0.95)'
};

export default alpha;
