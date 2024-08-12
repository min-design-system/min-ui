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

  ${({ size, compacted, rounded }) => {
    let horizontalPadding = 11;
    let verticalPadding = 11;
    let gap = 12;

    switch (size) {
      case 'small':
        horizontalPadding = 8;
        verticalPadding = 8;
        gap = 9;

        if (compacted && !rounded) {
          horizontalPadding = 4;
          verticalPadding = 4;
          gap = 5;
        } else if (compacted && rounded) {
          horizontalPadding = 6;
          verticalPadding = 4;
          gap = 5;
        }
        break;
      default:
        if (compacted && !rounded) {
          horizontalPadding = 7;
          verticalPadding = 7;
          gap = 8;
        } else if (compacted && rounded) {
          horizontalPadding = 9;
          verticalPadding = 7;
          gap = 8;
        }
        break;
    }

    return `
        padding: ${verticalPadding}px ${horizontalPadding}px;
        gap: ${gap}px;
      `;
  }};

  ${({
    theme: {
      semanticColor: { surface, border }
    },
    error,
    disabled
  }) => {
    if (disabled) {
      return `
        background-color: ${surface.disabled};
        border-color: ${border.default};
      `;
    }
    if (error) {
      return `
        background-color: ${surface.dangerWeak};
        border-color: ${border.danger};
      `;
    }
    // TODO 빈 string 을 Return 하는 경우, 이후의 StyledArrowFunction 을 통한 CSS 속성이 적용되지 않는 문제 수정
    return '';
  }};
`;

export const DefaultInput = styled.input`
  flex-grow: 1;
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
    // TODO Icon color disabled 처리 필요
    cursor: not-allowed;
    color: ${({
      theme: {
        semanticColor: { contents }
      }
    }) => contents.disabled};
  }
`;
