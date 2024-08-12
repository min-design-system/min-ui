import { forwardRef } from 'react';

import { StyledIcon } from './Icon.styles';
import { IconProps } from './Icon.typing';

// TODO, TypographySize, Color prop 추가, 폰트 로드 완료 전 fallback ? 렌더링 방법 등 고민 필요
const Icon = forwardRef<HTMLElement, IconProps>(function Icon({ name, ...props }, ref) {
  return (
    <StyledIcon ref={ref} {...props}>
      :{name}:
    </StyledIcon>
  );
});

export default Icon;
