import { forwardRef, PropsWithChildren } from 'react';

import {
  DefaultButton,
  CTAButton,
  ToggleButton,
  TextButton,
  ToggleTextButton
} from './Button.styles';
import { ButtonProps, DefaultButtonProps } from './Button.typing';

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(function Button(
  { children, variant, color, prefixIcon, suffixIcon, ...props },
  ref
) {
  if (variant === 'toggleText') {
    return (
      <ToggleTextButton ref={ref} variant={variant} color={color} {...props}>
        {prefixIcon}
        {children}
        {suffixIcon}
      </ToggleTextButton>
    );
  }

  if (variant === 'text') {
    return (
      <TextButton ref={ref} variant={variant} color={color} {...props}>
        {prefixIcon}
        {children}
        {suffixIcon}
      </TextButton>
    );
  }

  const isOnlyIcon = !children && (!!prefixIcon || !!suffixIcon);

  if (variant === 'toggle') {
    return (
      <ToggleButton ref={ref} variant={variant} color={color} onlyIcon={isOnlyIcon} {...props}>
        {prefixIcon}
        {children}
        {suffixIcon}
      </ToggleButton>
    );
  }

  if (variant === 'cta') {
    return (
      <CTAButton ref={ref} variant={variant} color={color} onlyIcon={isOnlyIcon} {...props}>
        {prefixIcon}
        {children}
        {suffixIcon}
      </CTAButton>
    );
  }

  return (
    <DefaultButton
      ref={ref}
      variant={variant}
      color={color as DefaultButtonProps['color']}
      onlyIcon={isOnlyIcon}
      {...props}
    >
      {prefixIcon}
      {children}
      {suffixIcon}
    </DefaultButton>
  );
});

export default Button;
