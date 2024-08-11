import { ButtonHTMLAttributes, ReactNode } from 'react';

import { BrandColorKey } from '@core/theme/colors/typing';

export interface BaseButtonProps {
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  size?: 'medium' | 'small';
}

export interface DefaultButtonProps extends BaseButtonProps {
  variant?: 'default';
  color?: BrandColorKey;
  compacted?: boolean;
  rounded?: boolean;
}

export interface CTAButtonProps extends Omit<BaseButtonProps, 'size'> {
  variant?: 'cta';
  color?: BrandColorKey;
  rounded?: boolean;
}

export interface ToggleButtonProps extends BaseButtonProps {
  variant?: 'toggle';
  color?: Extract<BrandColorKey, 'primary' | 'danger'>;
  compacted?: boolean;
  rounded?: boolean;
  selected?: boolean;
}

export interface TextButtonProps extends BaseButtonProps {
  variant?: 'text';
  color?: Exclude<BrandColorKey, 'neutral'> | 'white';
}

export interface ToggleTextButtonProps extends BaseButtonProps {
  variant?: 'toggleText';
  color?: Extract<BrandColorKey, 'primary'>;
  selected?: boolean;
}

export type ButtonProps = (
  | DefaultButtonProps
  | CTAButtonProps
  | ToggleButtonProps
  | TextButtonProps
  | ToggleTextButtonProps
) &
  ButtonHTMLAttributes<HTMLButtonElement>;
