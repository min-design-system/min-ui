import { ButtonHTMLAttributes, forwardRef, PropsWithChildren } from 'react';

import { StyledButton } from './Button.styles';

// TODO Props 타이핑 공통화, 고도화
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(function Button(
  { children, ...props },
  ref
) {
  return (
    <StyledButton ref={ref} {...props}>
      {children}
    </StyledButton>
  );
});

export default Button;
