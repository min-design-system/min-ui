import { forwardRef } from 'react';

import { StyledIcon } from './Icon.styles';
import { IconProps } from './Icon.typing';

const Icon = forwardRef<HTMLElement, IconProps>(function Icon({ name, ...props }, ref) {
  return (
    <StyledIcon ref={ref} {...props}>
      :{name}:
    </StyledIcon>
  );
});

export default Icon;
