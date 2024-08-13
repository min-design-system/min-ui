import { InputHTMLAttributes } from 'react';

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'children' | 'size'> {
  size?: 'medium' | 'small';
}
