import styled from '@core/styled';

import { BadgeProps } from './Badge.typing';

export const StyledBadge = styled.span<Pick<BadgeProps, 'color' | 'size'>>`
  padding: 2px 4px;
  border-radius: 999px;

  ${({
    theme: {
      semanticColor: { surface, contents }
    },
    color
  }) => {
    switch (color) {
      case 'inverse':
        return {
          backgroundColor: surface.default,
          color: contents.default
        };
      case 'primary':
        return {
          backgroundColor: surface.primary,
          color: contents.white
        };
      case 'danger':
        return {
          backgroundColor: surface.danger,
          color: contents.white
        };
      default:
        return {
          backgroundColor: surface.inverse,
          color: contents.inverse
        };
    }
  }};

  ${({
    theme: {
      typography: { caption }
    },
    size
  }) => {
    if (size === 'small') {
      return {
        fontSize: caption.small.size,
        fontWeight: caption.small.weight,
        lineHeight: caption.small.lineHeight.default
      };
    }

    return {
      fontSize: caption.medium.size,
      fontWeight: caption.medium.weight,
      lineHeight: caption.medium.lineHeight.default
    };
  }};
`;

export const Children = styled.span`
  padding: 0 2px;
`;
