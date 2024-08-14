import styled from '@core/styled';

import { TabProps } from './Tab.typing';

export const TabContainer = styled.div<Pick<TabProps, 'enableWide'>>`
  display: flex;
  align-items: center;
  overflow-x: auto;
  border-bottom: 1px solid
    ${({
      theme: {
        semanticColor: { border }
      }
    }) => border.default};

  ${({ enableWide }) =>
    !enableWide
      ? { gap: '12px' }
      : {
          '& > div': {
            flexGrow: 1
          }
        }};
`;
