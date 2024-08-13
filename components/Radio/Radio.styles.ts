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
        return `
          font-size: ${body.small.size};
          font-weight: ${body.small.weight};
          line-height: ${body.small.lineHeight.default};
        `;
      default:
        return `
          font-size: ${body.medium.size};
          font-weight: ${body.medium.weight};
          line-height: ${body.medium.lineHeight.default};
        `;
    }
  }};

  ${({
    theme: {
      semanticColor: { contents }
    },
    disabled
  }) => (disabled ? `color: ${contents.disabled}` : '')};
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
      return `
        color: ${contents.primary};
      `;
    }

    return `
      color: ${contents.disabled}
    `;
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
