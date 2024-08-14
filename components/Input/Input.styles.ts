import styled from '@core/styled';

import { InputProps } from './Input.typing';

export const DefaultInputContainer = styled.div<
  Pick<InputProps, 'size' | 'rounded' | 'compacted' | 'fullWidth' | 'error' | 'disabled'> & {
    focused: boolean;
  }
>`
  display: inline-flex;
  align-items: center;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  border: 1px solid
    ${({
      theme: {
        semanticColor: { border }
      },
      focused
    }) => (focused ? border.stronger : border.default)};
  border-radius: ${({ rounded }) => (rounded ? '99px' : '8px')};
  background-color: ${({
    theme: {
      semanticColor: { surface }
    }
  }) => surface.default};

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

  ${({ size, compacted, rounded }) => {
    let horizontalPadding = 11;
    let verticalPadding = 11;
    let gap = 10;

    switch (size) {
      case 'small':
        horizontalPadding = 8;
        verticalPadding = 8;
        gap = 7;

        if (compacted && !rounded) {
          horizontalPadding = 4;
          verticalPadding = 4;
          gap = 3;
        } else if (compacted && rounded) {
          horizontalPadding = 6;
          verticalPadding = 4;
          gap = 3;
        }
        break;
      default:
        if (compacted && !rounded) {
          horizontalPadding = 7;
          verticalPadding = 7;
          gap = 6;
        } else if (compacted && rounded) {
          horizontalPadding = 9;
          verticalPadding = 7;
          gap = 6;
        }
        break;
    }

    return {
      padding: `${verticalPadding}px ${horizontalPadding}px`,
      gap: `${gap}px`
    };
  }};

  ${({
    theme: {
      semanticColor: { surface, border }
    },
    error,
    disabled
  }) => {
    if (disabled) {
      return {
        backgroundColor: surface.disabled,
        borderColor: border.default
      };
    }
    if (error) {
      return {
        backgroundColor: surface.dangerWeak,
        borderColor: border.danger
      };
    }
    return null;
  }};
`;

export const DefaultInput = styled.input`
  flex-grow: 1;
  padding: 0 2px;
  border: none;
  background-color: transparent;
  outline: 0;

  &::placeholder {
    color: ${({
      theme: {
        semanticColor: { contents }
      }
    }) => contents.disabled};
  }
  &:disabled {
    cursor: not-allowed;
    color: ${({
      theme: {
        semanticColor: { contents }
      }
    }) => contents.disabled};
  }
`;
