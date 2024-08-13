import { forwardRef } from 'react';

import { StyledTag, Children, PrefixIcon, DeleteIcon } from './Tag.styles';
import { TagProps } from './Tag.typing';

const Tag = forwardRef<HTMLDivElement, TagProps>(function Tag(
  { children, size, prefixIcon, deleteIcon, ...props },
  ref
) {
  return (
    <StyledTag ref={ref} size={size} hasDeleteIcon={!!deleteIcon} {...props}>
      {prefixIcon && <PrefixIcon size={size}>{prefixIcon}</PrefixIcon>}
      <Children>{children}</Children>
      {deleteIcon && <DeleteIcon size={size}>{deleteIcon}</DeleteIcon>}
    </StyledTag>
  );
});

export default Tag;
