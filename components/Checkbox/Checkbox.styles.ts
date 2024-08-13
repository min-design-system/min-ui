import styled from '@core/styled';

import { CheckboxProps } from './Checkbox.typing';

export const CheckboxContainer = styled.div<Pick<CheckboxProps, 'size' | 'disabled'>>`
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

export const CheckboxInputContainer = styled.div<
  Pick<CheckboxProps, 'size' | 'checked' | 'disabled' | 'indeterminate'>
>`
  ${({
    theme: {
      semanticColor: { contents }
    },
    checked,
    disabled,
    indeterminate
  }) => {
    if (!disabled && !indeterminate && checked) {
      return `
        color: ${contents.primary};
      `;
    }

    return `
      color: ${contents.disabled}
    `;
  }}
`;

export const CheckboxInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;
