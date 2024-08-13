import { forwardRef, PropsWithChildren } from 'react';

import {
  DefaultButton,
  CTAButton,
  ToggleButton,
  TextButton,
  ToggleTextButton,
  Children
} from './Button.styles';
import { ButtonProps, DefaultButtonProps } from './Button.typing';

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(function Button(
  { children, variant, color, prefixIcon, suffixIcon, ...props },
  ref
) {
  const isOnlyIcon = !children && (!!prefixIcon || !!suffixIcon);

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

  if (variant === 'toggle') {
    return (
      <ToggleButton ref={ref} variant={variant} color={color} onlyIcon={isOnlyIcon} {...props}>
        {prefixIcon}
        <Children>{children}</Children>
        {suffixIcon}
      </ToggleButton>
    );
  }

  if (variant === 'cta') {
    return (
      <CTAButton ref={ref} variant={variant} color={color} onlyIcon={isOnlyIcon} {...props}>
        {prefixIcon}
        <Children>{children}</Children>
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
      <Children>{children}</Children>
      {suffixIcon}
    </DefaultButton>
  );
});

export default Button;
