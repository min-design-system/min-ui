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
      ? `
        font-size: ${body.mediumStrong.size};
        font-weight: ${body.mediumStrong.weight};
        line-height: ${body.mediumStrong.lineHeight.default};
      `
      : `
        font-size: ${body.medium.size};
        font-weight: ${body.medium.weight};
        line-height: ${body.medium.lineHeight.default};
      `};

  ${({
    theme: {
      semanticColor: { contents, border }
    },
    selected
  }) => (selected ? `border-bottom-color: ${border.stronger}` : `color: ${contents.disabled}`)};
`;

export const DotContainer = styled.div`
  position: relative;
`;

export const Dot = styled.div`
  position: absolute;
  right: -4px;
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
