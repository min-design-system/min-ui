import { InputHTMLAttributes, ReactNode } from 'react';

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'children' | 'size'> {
  size?: 'medium' | 'small';
  label?: ReactNode;
}
