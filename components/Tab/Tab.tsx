import { Children, cloneElement, forwardRef, isValidElement, MouseEvent } from 'react';

import { TabContainer } from './Tab.styles';
import { TabProps } from './Tab.typing';
import { TabItemProps } from './TabItem/TabItem.typing';

const Tab = forwardRef<HTMLDivElement, TabProps>(function Tab(
  { children, onChange, value, ...props },
  ref
) {
  const handleClick =
    (newValue: TabProps['value'], tabItemOnClick?: TabItemProps['onClick']) =>
    (event: MouseEvent<HTMLDivElement>) => {
      if (typeof onChange === 'function') {
        onChange(newValue);
      }

      if (typeof tabItemOnClick === 'function') {
        tabItemOnClick(event);
      }
    };

  return (
    <TabContainer ref={ref} {...props}>
      {Children.map(children, (TabItem) => {
        if (!isValidElement<TabItemProps>(TabItem)) {
          return null;
        }

        return cloneElement(TabItem, {
          ...TabItem.props,
          selected: value === TabItem.props?.value,
          onClick: handleClick(TabItem.props?.value, TabItem.props?.onClick)
        });
      })}
    </TabContainer>
  );
});

export default Tab;
