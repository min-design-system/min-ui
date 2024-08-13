import { InputHTMLAttributes, ReactNode } from 'react';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'children' | 'size'> {
  size?: 'medium' | 'small';
  indeterminate?: boolean;
  label?: ReactNode;
}
