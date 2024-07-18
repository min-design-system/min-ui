import { ColorScaleRange, ColorValue } from './typing';

const gray: Record<ColorScaleRange<0 | 1000>, ColorValue> = {
  0: '#FFFFFF',
  100: '#F4F4F5',
  200: '#E4E4E7',
  300: '#D4D4D8',
  400: '#A1A1AA',
  500: '#71717A',
  600: '#52525B',
  700: '#3F3F46',
  800: '#27272A',
  900: '#18181B',
  1000: '#000000'
};

export default gray;
