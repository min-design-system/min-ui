import styled from '@core/styled';

import { TabItemProps } from './TabItem.typing';

export const TabItemContainer = styled.div<Pick<TabItemProps, 'selected'>>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  border-bottom: 2px solid transparent;
  white-space: nowrap;
  cursor: pointer;

  ${({
    theme: {
      typography: { body }
    },
    selected
  }) =>
    selected
      ? {
          fontSize: body.mediumStrong.size,
          fontWeight: body.mediumStrong.weight,
          lineHeight: body.mediumStrong.lineHeight.default
        }
      : {
          fontSize: body.medium.size,
          fontWeight: body.medium.weight,
          lineHeight: body.medium.lineHeight.default
        }};

  ${({
    theme: {
      semanticColor: { contents, border }
    },
    selected
  }) => (selected ? { borderBottomColor: border.stronger } : { color: contents.disabled })};
`;

export const DotContainer = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: flex-end;
`;

export const Dot = styled.div`
  position: fixed;
  margin-right: -4px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${({
    theme: {
      semanticColor: { contents }
    }
  }) => contents.primary};
`;

export const StyledTabItem = styled.div``;
