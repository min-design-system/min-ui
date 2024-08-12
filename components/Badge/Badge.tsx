import { forwardRef } from 'react';

import { StyledBadge } from './Badge.styles';
import { BadgeProps } from './Badge.typing';

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge({ children, ...props }, ref) {
  return (
    <StyledBadge ref={ref} {...props}>
      {children}
    </StyledBadge>
  );
});

export default Badge;
