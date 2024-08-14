import styled from '@core/styled';

import {
  DefaultButtonProps,
  CTAButtonProps,
  ToggleButtonProps,
  TextButtonProps,
  ToggleTextButtonProps
} from './Button.typing';

export const DefaultButton = styled.button<
  DefaultButtonProps & {
    onlyIcon: boolean;
  }
>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: 0;
  cursor: pointer;
  border: 1px solid transparent;
  background-color: transparent;
  border-radius: ${({ rounded }) => (rounded ? '999px' : '8px')};

  ${({
    color,
    theme: {
      semanticColor: { contents, surface, border }
    }
  }) => {
    switch (color) {
      case 'secondary':
        return {
          backgroundColor: surface.default,
          borderColor: border.default,
          color: contents.default
        };
      case 'tertiary':
        return {
          backgroundColor: surface.default,
          color: contents.default
        };
      case 'neutral':
        return {
          backgroundColor: surface.strong,
          color: contents.default
        };
      case 'danger':
        return {
          backgroundColor: surface.danger,
          color: contents.white
        };
      default:
        return {
          backgroundColor: surface.primary,
          color: contents.white
        };
    }
  }};

  ${({
    theme: {
      typography: {
        body: { mediumStrong, smallStrong }
      }
    },
    size,
    compacted,
    rounded,
    onlyIcon
  }) => {
    let horizontalPadding = 11;
    let verticalPadding = 11;
    let gap = 4;
    let fontSize = mediumStrong.size;
    let fontWeight = mediumStrong.weight;
    let lineHeight = mediumStrong.lineHeight.default;

    switch (size) {
      case 'small':
        horizontalPadding = 8;
        verticalPadding = 8;
        gap = 3;
        fontSize = smallStrong.size;
        fontWeight = smallStrong.weight;
        lineHeight = smallStrong.lineHeight.default;

        if (compacted) {
          horizontalPadding = 4;
          verticalPadding = 4;
        }
        break;
      default:
        if (compacted) {
          horizontalPadding = 7;
          verticalPadding = 7;
        }
        break;
    }

    if (!onlyIcon && rounded) {
      horizontalPadding += 2;
    }

    return {
      gap: `${gap}px`,
      padding: `${verticalPadding}px ${horizontalPadding}px`,
      fontSize: `${fontSize}px`,
      fontWeight,
      lineHeight
    };
  }};

  &:disabled {
    cursor: not-allowed;
    border-color: transparent;
    background-color: ${({
      theme: {
        semanticColor: { surface }
      }
    }) => surface.disabled};
    color: ${({
      theme: {
        semanticColor: { contents }
      }
    }) => contents.disabled};
  }
`;

export const CTAButton = styled.button<
  CTAButtonProps & {
    onlyIcon: boolean;
  }
>`
  display: inline-flex;
  align-items: center;
  outline: 0;
  padding: 17px;
  gap: 5px;
  cursor: pointer;
  border: 1px solid transparent;
  background-color: transparent;
  border-radius: ${({ rounded }) => (rounded ? '999px' : '8px')};

  ${({
    color,
    theme: {
      semanticColor: { contents, surface, border }
    }
  }) => {
    switch (color) {
      case 'secondary':
        return {
          backgroundColor: surface.default,
          borderColor: border.default,
          color: contents.default
        };
      case 'tertiary':
        return {
          backgroundColor: surface.default,
          color: contents.default
        };
      case 'neutral':
        return {
          backgroundColor: surface.strong,
          color: contents.default
        };
      case 'danger':
        return {
          backgroundColor: surface.danger,
          color: contents.white
        };
      default:
        return {
          backgroundColor: surface.primary,
          color: contents.white
        };
    }
  }};

  ${({
    theme: {
      typography: {
        body: {
          largeStronger: { size, weight, lineHeight }
        }
      }
    }
  }) => ({
    fontSize: size,
    fontWeight: weight,
    lineHeight: lineHeight.default
  })};

  &:disabled {
    cursor: not-allowed;
    border-color: transparent;
    background-color: ${({
      theme: {
        semanticColor: { surface }
      }
    }) => surface.disabled};
    color: ${({
      theme: {
        semanticColor: { contents }
      }
    }) => contents.disabled};
  }
`;

export const ToggleButton = styled.button<
  ToggleButtonProps & {
    onlyIcon: boolean;
  }
>`
  display: inline-flex;
  align-items: center;
  outline: 0;
  cursor: pointer;
  border: 1px solid transparent;
  background-color: transparent;
  border-radius: ${({ rounded }) => (rounded ? '999px' : '8px')};

  ${({
    color,
    selected,
    theme: {
      semanticColor: { contents, surface, border }
    }
  }) => {
    switch (color) {
      case 'danger':
        return selected
          ? {
              backgroundColor: surface.danger,
              color: contents.white
            }
          : {
              backgroundColor: surface.default,
              borderColor: border.danger,
              color: contents.danger
            };
      default:
        return selected
          ? {
              backgroundColor: surface.primary,
              color: contents.white
            }
          : {
              backgroundColor: surface.default,
              borderColor: border.default,
              color: contents.default
            };
    }
  }};

  ${({
    theme: {
      typography: {
        body: { mediumStrong, smallStrong }
      }
    },
    size,
    compacted,
    rounded,
    onlyIcon
  }) => {
    let horizontalPadding = 11;
    let verticalPadding = 11;
    let gap = 4;
    let fontSize = mediumStrong.size;
    let fontWeight = mediumStrong.weight;
    let lineHeight = mediumStrong.lineHeight.default;

    switch (size) {
      case 'small':
        horizontalPadding = 8;
        verticalPadding = 8;
        gap = 3;
        fontSize = smallStrong.size;
        fontWeight = smallStrong.weight;
        lineHeight = smallStrong.lineHeight.default;

        if (compacted) {
          horizontalPadding = 4;
          verticalPadding = 4;
        }
        break;
      default:
        if (compacted) {
          horizontalPadding = 7;
          verticalPadding = 7;
        }
        break;
    }

    if (!onlyIcon && rounded) {
      horizontalPadding += 2;
    }

    return {
      gap: `${gap}px`,
      padding: `${verticalPadding}px ${horizontalPadding}px`,
      fontSize: `${fontSize}px`,
      fontWeight,
      lineHeight
    };
  }};

  &:disabled {
    cursor: not-allowed;
    border-color: transparent;
    background-color: ${({
      theme: {
        semanticColor: { surface }
      }
    }) => surface.disabled};
    color: ${({
      theme: {
        semanticColor: { contents }
      }
    }) => contents.disabled};
  }
`;

export const TextButton = styled.button<TextButtonProps>`
  display: inline-flex;
  align-items: center;
  outline: 0;
  cursor: pointer;
  border: 1px solid transparent;
  background-color: transparent;
  border-radius: 8px;

  ${({
    color,
    theme: {
      semanticColor: { contents, surface }
    }
  }) => {
    switch (color) {
      case 'secondary':
        return {
          color: contents.default
        };
      case 'tertiary':
        return {
          color: contents.neutral
        };
      case 'danger':
        return {
          color: contents.danger
        };
      case 'white':
        return {
          color: contents.white
        };
      default:
        return {
          color: surface.primary
        };
    }
  }};

  ${({
    theme: {
      typography: {
        body: { mediumStrong, smallStrong }
      }
    },
    size
  }) => {
    let gap = 6;
    let fontSize = mediumStrong.size;
    let fontWeight = mediumStrong.weight;
    let lineHeight = mediumStrong.lineHeight.default;

    switch (size) {
      case 'small':
        gap = 5;
        fontSize = smallStrong.size;
        fontWeight = smallStrong.weight;
        lineHeight = smallStrong.lineHeight.default;
        break;
      default:
        break;
    }

    return {
      gap: `${gap}px`,
      fontSize: `${fontSize}px`,
      fontWeight,
      lineHeight
    };
  }};

  &:disabled {
    cursor: not-allowed;
    color: ${({
      theme: {
        semanticColor: { contents }
      }
    }) => contents.disabled};
  }
`;

export const ToggleTextButton = styled.button<ToggleTextButtonProps>`
  display: inline-flex;
  align-items: center;
  outline: 0;
  cursor: pointer;
  border: 1px solid transparent;
  background-color: transparent;
  border-radius: 8px;

  ${({
    selected,
    theme: {
      semanticColor: { contents, surface }
    }
  }) =>
    selected
      ? {
          color: surface.primary
        }
      : {
          color: contents.default
        }};

  ${({
    theme: {
      typography: {
        body: { mediumStrong, smallStrong }
      }
    },
    size
  }) => {
    let gap = 6;
    let fontSize = mediumStrong.size;
    let fontWeight = mediumStrong.weight;
    let lineHeight = mediumStrong.lineHeight.default;

    switch (size) {
      case 'small':
        gap = 5;
        fontSize = smallStrong.size;
        fontWeight = smallStrong.weight;
        lineHeight = smallStrong.lineHeight.default;
        break;
      default:
        break;
    }

    return {
      gap: `${gap}px`,
      fontSize: `${fontSize}px`,
      fontWeight,
      lineHeight
    };
  }};

  &:disabled {
    cursor: not-allowed;
    color: ${({
      theme: {
        semanticColor: { contents }
      }
    }) => contents.disabled};
  }
`;

export const Children = styled.div`
  padding: 0 2px;
`;
