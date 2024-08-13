import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'children' | 'size'> {
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  size?: 'medium' | 'small';
  fullWidth?: boolean;
  rounded?: boolean;
  compacted?: boolean;
  error?: boolean;
}
