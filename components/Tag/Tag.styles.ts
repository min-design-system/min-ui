import styled from '@core/styled';

import { TagProps } from './Tag.typing';

export const StyledTag = styled.div<
  Pick<TagProps, 'color' | 'size' | 'disabled'> & {
    hasDeleteIcon: boolean;
  }
>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border-radius: 4px;
  cursor: ${({ hasDeleteIcon }) => (hasDeleteIcon ? 'pointer' : 'default')};

  ${({
    theme: {
      semanticColor: { surface, contents }
    },
    color
  }) => {
    switch (color) {
      case 'light':
        return {
          backgroundColor: surface.default,
          color: contents.default
        };
      case 'neutral':
        return {
          backgroundColor: surface.neutral,
          color: contents.white
        };
      case 'neutral-light':
        return {
          backgroundColor: surface.strong,
          color: contents.default
        };
      case 'primary':
        return {
          backgroundColor: surface.primary,
          color: contents.white
        };
      case 'primary-light':
        return {
          backgroundColor: surface.primaryWeak,
          color: contents.primary
        };
      case 'danger':
        return {
          backgroundColor: surface.danger,
          color: contents.white
        };
      case 'danger-light':
        return {
          backgroundColor: surface.dangerWeak,
          color: contents.danger
        };
      case 'blue':
        return {
          backgroundColor: surface.blue,
          color: contents.white
        };
      case 'blue-light':
        return {
          backgroundColor: surface.blueWeak,
          color: contents.blue
        };
      case 'mint':
        return {
          backgroundColor: surface.mint,
          color: contents.white
        };
      case 'mint-light':
        return {
          backgroundColor: surface.mintWeak,
          color: contents.mint
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
        gap: '1px',
        fontSize: caption.small.size,
        fontWeight: caption.small.weight,
        lineHeight: caption.small.lineHeight.default
      };
    }

    return {
      gap: '2px',
      fontSize: caption.medium.size,
      fontWeight: caption.medium.weight,
      lineHeight: caption.medium.lineHeight.default
    };
  }};

  ${({
    theme: {
      semanticColor: { surface, contents }
    },
    disabled
  }) =>
    disabled
      ? {
          backgroundColor: surface.disabled,
          color: contents.disabled,
          cursor: 'not-allowed'
        }
      : null};
`;

export const Children = styled.div`
  padding: 0 2px;
`;

export const PrefixIcon = styled.div<Pick<TagProps, 'size'>>`
  ${({
    theme: {
      typography: { caption }
    },
    size
  }) => {
    if (size === 'small') {
      return {
        fontSize: caption.smallStrong.size,
        fontWeight: caption.smallStrong.weight,
        lineHeight: caption.smallStrong.lineHeight.default
      };
    }

    return {
      fontSize: caption.mediumStrong.size,
      fontWeight: caption.mediumStrong.weight,
      lineHeight: caption.mediumStrong.lineHeight.default
    };
  }};
`;

export const DeleteIcon = styled.div<Pick<TagProps, 'size'>>`
  padding-right: 2px;
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
