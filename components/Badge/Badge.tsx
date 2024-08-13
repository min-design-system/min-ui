import { forwardRef } from 'react';

import { StyledBadge, Children } from './Badge.styles';
import { BadgeProps } from './Badge.typing';

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge({ children, ...props }, ref) {
  return (
    <StyledBadge ref={ref} {...props}>
      <Children>{children}</Children>
    </StyledBadge>
  );
});

export default Badge;
