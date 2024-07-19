import { ButtonHTMLAttributes, forwardRef, PropsWithChildren } from 'react';

import { StyledButton } from './DangerButton.styles';

// TODO Props 타이핑 공통화, 고도화
export interface DangerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const DangerButton = forwardRef<HTMLButtonElement, PropsWithChildren<DangerButtonProps>>(
  function DangerButton({ children, ...props }, ref) {
    return (
      <StyledButton ref={ref} {...props}>
        {children}
      </StyledButton>
    );
  }
);

export default DangerButton;
