import { AlphaColorScaleKey, AlphaColorScaleRange, CSSValue } from './typing';

const alpha: Record<
  | Extract<AlphaColorScaleKey, 'none'>
  | `${Exclude<AlphaColorScaleKey, 'none'>}${AlphaColorScaleRange}`,
  CSSValue
> = {
  none: '#FFFFFF',
  white5: 'rgba(255, 255, 255, 0.05)',
  white20: 'rgba(255, 255, 255, 0.2)',
  white40: 'rgba(255, 255, 255, 0.4)',
  white60: 'rgba(255, 255, 255, 0.6)',
  white80: 'rgba(255, 255, 255, 0.8)',
  white95: 'rgba(255, 255, 255, 0.95)',
  black5: 'rgba(0, 0, 0, 0.05)',
  black20: 'rgba(0, 0, 0, 0.2)',
  black40: 'rgba(0, 0, 0, 0.4)',
  black60: 'rgba(0, 0, 0, 0.6)',
  black80: 'rgba(0, 0, 0, 0.8)',
  black95: 'rgba(0, 0, 0, 0.95)'
};

export default alpha;
