import { HTMLAttributes } from 'react';

export interface TabProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  onChange?: (value: TabProps['value']) => void;
  value?: string | number;
  enableWide?: boolean;
}
