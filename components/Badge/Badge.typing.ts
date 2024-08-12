import { HTMLAttributes } from 'react';

import { BrandColorKey, SecondaryColorKey } from '@core/theme/colors/typing';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  size?: 'medium' | 'small';
  color?:
    | 'default'
    | Extract<BrandColorKey, 'primary' | 'danger'>
    | Extract<SecondaryColorKey, 'inverse'>;
}
