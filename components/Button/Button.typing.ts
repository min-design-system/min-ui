import { ButtonHTMLAttributes, ReactNode } from 'react';

import { BrandColorKey } from '@core/theme/colors/typing';

interface BaseButtonProps {
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
}

export interface DefaultButtonProps extends BaseButtonProps {
  variant?: 'default';
  color?: BrandColorKey;
  size?: 'medium' | 'small';
  compacted?: boolean;
  rounded?: boolean;
}

export interface CTAButtonProps extends BaseButtonProps {
  variant?: 'cta';
  color?: BrandColorKey;
  rounded?: boolean;
}

export interface ToggleButtonProps extends BaseButtonProps {
  variant?: 'toggle';
  color?: Extract<BrandColorKey, 'primary' | 'danger'>;
  size?: 'medium' | 'small';
  compacted?: boolean;
  rounded?: boolean;
  selected?: boolean;
}

export interface TextButtonProps extends BaseButtonProps {
  variant?: 'text';
  size?: 'medium' | 'small';
  color?: Exclude<BrandColorKey, 'neutral'> | 'white';
}

export interface ToggleTextButtonProps extends BaseButtonProps {
  variant?: 'toggleText';
  size?: 'medium' | 'small';
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
