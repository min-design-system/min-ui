import { HTMLAttributes, ReactNode } from 'react';

import { BrandColorKey, SecondaryColorKey } from '@core/theme/colors/typing';

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'medium' | 'small';
  color?:
    | 'default'
    | Extract<BrandColorKey, 'primary' | 'neutral' | 'danger'>
    | `${Extract<BrandColorKey, 'primary' | 'neutral' | 'danger'>}-light`
    | Extract<SecondaryColorKey, 'blue' | 'mint'>
    | `${Extract<SecondaryColorKey, 'blue' | 'mint'>}-light`
    | 'light';
  prefixIcon?: ReactNode;
  deleteIcon?: ReactNode;
  disabled?: boolean;
}
