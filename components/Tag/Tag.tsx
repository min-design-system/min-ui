import { forwardRef } from 'react';

import { StyledTag, PrefixIcon, DeleteIcon } from './Tag.styles';
import { TagProps } from './Tag.typing';

const Tag = forwardRef<HTMLDivElement, TagProps>(function Tag(
  { children, size, prefixIcon, deleteIcon, ...props },
  ref
) {
  return (
    <StyledTag ref={ref} size={size} hasDeleteIcon={!!deleteIcon} {...props}>
      {prefixIcon && <PrefixIcon size={size}>{prefixIcon}</PrefixIcon>}
      {children}
      {deleteIcon && <DeleteIcon size={size}>{deleteIcon}</DeleteIcon>}
    </StyledTag>
  );
});

export default Tag;
