import styled from '@core/styled';

import { RadioProps } from './Radio.typing';

export const RadioContainer = styled.div<Pick<RadioProps, 'size' | 'disabled'>>`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 4px;

  ${({
    theme: {
      typography: { body }
    },
    size
  }) => {
    switch (size) {
      case 'small':
        return {
          fontSize: body.small.size,
          fontWeight: body.small.weight,
          lineHeight: body.small.lineHeight.default
        };
      default:
        return {
          fontSize: body.medium.size,
          fontWeight: body.medium.weight,
          lineHeight: body.medium.lineHeight.default
        };
    }
  }};

  ${({
    theme: {
      semanticColor: { contents }
    },
    disabled
  }) => (disabled ? { color: contents.disabled } : null)};
`;

export const RadioInputContainer = styled.div<Pick<RadioProps, 'size' | 'checked' | 'disabled'>>`
  ${({
    theme: {
      semanticColor: { contents }
    },
    checked,
    disabled
  }) => {
    if (!disabled && checked) {
      return {
        color: contents.primary
      };
    }

    return {
      color: contents.disabled
    };
  }}
`;

export const RadioInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;
