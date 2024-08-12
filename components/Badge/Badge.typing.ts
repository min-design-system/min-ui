import { HTMLAttributes } from 'react';

import { BrandColorKey, SecondaryColorKey } from '@core/theme/colors/typing';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  size?: 'medium' | 'small';
  color?: Extract<BrandColorKey, 'primary' | 'danger'> | Extract<SecondaryColorKey, 'inverse'>;
}
