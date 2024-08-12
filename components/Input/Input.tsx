import { FocusEvent, forwardRef, useState } from 'react';

import { DefaultInput, DefaultInputContainer } from './Input.styles';
import { InputProps } from './Input.typing';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    fullWidth,
    size,
    rounded,
    compacted,
    prefixIcon,
    suffixIcon,
    error,
    disabled,
    onFocus,
    onBlur,
    ...props
  },
  ref
) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);

    if (typeof onFocus === 'function') {
      onFocus(event);
    }
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);

    if (typeof onBlur === 'function') {
      onBlur(event);
    }
  };

  return (
    <DefaultInputContainer
      size={size}
      rounded={rounded}
      compacted={compacted}
      error={error}
      fullWidth={fullWidth}
      focused={isFocused}
      disabled={disabled}
    >
      {prefixIcon}
      <DefaultInput
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        {...props}
      />
      {suffixIcon}
    </DefaultInputContainer>
  );
});

export default Input;
