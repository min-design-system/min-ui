import { forwardRef } from 'react';

import { StyledTag, PrefixIcon, SuffixIcon } from './Tag.styles';
import { TagProps } from './Tag.typing';

const Tag = forwardRef<HTMLDivElement, TagProps>(function Tag(
  { children, size, prefixIcon, suffixIcon, ...props },
  ref
) {
  return (
    <StyledTag ref={ref} size={size} {...props}>
      {prefixIcon && <PrefixIcon size={size}>{prefixIcon}</PrefixIcon>}
      {children}
      {suffixIcon && <SuffixIcon size={size}>{suffixIcon}</SuffixIcon>}
    </StyledTag>
  );
});

export default Tag;
