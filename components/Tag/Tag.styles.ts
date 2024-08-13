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
        return `
          background-color: ${surface.default};
          color: ${contents.default};
        `;
      case 'neutral':
        return `
          background-color: ${surface.neutral};
          color: ${contents.white};
        `;
      case 'neutral-light':
        return `
          background-color: ${surface.strong};
          color: ${contents.default};
        `;
      case 'primary':
        return `
          background-color: ${surface.primary};
          color: ${contents.white};
        `;
      case 'primary-light':
        return `
          background-color: ${surface.primaryWeak};
          color: ${contents.primary};
        `;
      case 'danger':
        return `
          background-color: ${surface.danger};
          color: ${contents.white};
        `;
      case 'danger-light':
        return `
          background-color: ${surface.dangerWeak};
          color: ${contents.danger};
        `;
      case 'blue':
        return `
          background-color: ${surface.blue};
          color: ${contents.white};
        `;
      case 'blue-light':
        return `
          background-color: ${surface.blueWeak};
          color: ${contents.blue};
        `;
      case 'mint':
        return `
            background-color: ${surface.mint};
            color: ${contents.white};
          `;
      case 'mint-light':
        return `
          background-color: ${surface.mintWeak};
          color: ${contents.mint};
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
        gap: 1px;
        font-size: ${caption.small.size};
        font-weight: ${caption.small.weight};
        line-height: ${caption.small.lineHeight.default};        
      `;
    }

    return `
      gap: 2px;
      font-size: ${caption.medium.size};
      font-weight: ${caption.medium.weight};
      line-height: ${caption.medium.lineHeight.default};        
    `;
  }};

  ${({
    theme: {
      semanticColor: { surface, contents }
    },
    disabled
  }) =>
    disabled
      ? `
    background-color: ${surface.disabled};
    color: ${contents.disabled};
    cursor: not-allowed;
  `
      : ''};
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
      return `
        font-size: ${caption.smallStrong.size};
        font-weight: ${caption.smallStrong.weight};
        line-height: ${caption.smallStrong.lineHeight.default};        
      `;
    }

    return `
      font-size: ${caption.mediumStrong.size};
      font-weight: ${caption.mediumStrong.weight};
      line-height: ${caption.mediumStrong.lineHeight.default};        
    `;
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
