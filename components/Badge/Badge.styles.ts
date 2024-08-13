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
        return `
          background-color: ${surface.default};
          color: ${contents.default};
        `;
      case 'primary':
        return `
          background-color: ${surface.primary};
          color: ${contents.white};
        `;
      case 'danger':
        return `
          background-color: ${surface.danger};
          color: ${contents.white};
        `;
      default:
        return `
          background-color: ${surface.inverse};
          color: ${contents.inverse};
        `;
    }
  }};

  ${({
    theme: {
      typography: { caption }
    },
    size
  }) => {
    if (size === 'small') {
      return `
        font-size: ${caption.small.size};
        font-weight: ${caption.small.weight};
        line-height: ${caption.small.lineHeight.default};        
      `;
    }

    return `
      font-size: ${caption.medium.size};
      font-weight: ${caption.medium.weight};
      line-height: ${caption.medium.lineHeight.default};        
    `;
  }};
`;

export const Children = styled.span`
  padding: 0 2px;
`;
