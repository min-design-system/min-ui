import { forwardRef } from 'react';

import { StyledTabItem, Dot, DotContainer, TabItemContainer } from './TabItem.styles';
import { TabItemProps } from './TabItem.typing';

const TabItem = forwardRef<HTMLDivElement, TabItemProps>(function TabItem(
  { children, showDot, selected, ...props },
  ref
) {
  return (
    <TabItemContainer ref={ref} selected={selected} {...props}>
      <DotContainer>
        {showDot && <Dot />}
        <StyledTabItem>{children}</StyledTabItem>
      </DotContainer>
    </TabItemContainer>
  );
});

export default TabItem;
