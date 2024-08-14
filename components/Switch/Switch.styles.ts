import styled from '@core/styled';

import { SwitchProps } from './Switch.typing';

export const SwitchContainer = styled.div<Pick<SwitchProps, 'size' | 'checked'>>`
  position: relative;
  min-width: ${({ size }) => (size === 'small' ? '32px' : '40px')};
  display: inline-flex;
  align-items: center;
  justify-content: ${({ checked }) => (checked ? 'flex-end' : 'flex-start')};
  padding: 2px;
  border-radius: 50px;
  background-color: ${({
    theme: {
      semanticColor: { surface }
    },
    checked
  }) => (checked ? surface.primary : surface.disabled)};
`;

export const Circle = styled.div<Pick<SwitchProps, 'size' | 'checked'>>`
  border-radius: 50%;
  background-color: ${({
    theme: {
      semanticColor: { contents }
    }
  }) => contents.white};

  ${({ size }) =>
    size === 'small'
      ? {
          width: '16px',
          height: '16px'
        }
      : {
          width: '20px',
          height: '20px'
        }};
`;

export const SwitchInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
`;
