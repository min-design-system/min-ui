import { HTMLAttributes } from 'react';

import { TabProps } from '../Tab.typing';

export interface TabItemProps extends HTMLAttributes<HTMLDivElement> {
  value?: TabProps['value'];
  selected?: boolean;
  showDot?: boolean;
}
