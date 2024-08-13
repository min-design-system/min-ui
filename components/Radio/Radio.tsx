import { ChangeEvent, forwardRef, useEffect, useState } from 'react';

import { RadioContainer, RadioInputContainer, RadioInput } from './Radio.styles';
import { RadioProps } from './Radio.typing';
import Icon from '../Icon';

const Radio = forwardRef<HTMLDivElement, RadioProps>(function Checkbox(
  { label, size, checked, disabled, onChange, ...props },
  ref
) {
  const [localChecked, setLocalChecked] = useState(checked);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocalChecked(event.currentTarget.checked);

    if (typeof onChange === 'function') {
      onChange(event);
    }
  };

  useEffect(() => setLocalChecked(checked), [checked]);

  return (
    <RadioContainer ref={ref} size={size} disabled={disabled}>
      <RadioInputContainer checked={localChecked} disabled={disabled}>
        <RadioInput
          type="radio"
          onChange={handleChange}
          checked={localChecked}
          disabled={disabled}
          {...props}
        />
        {!localChecked && <Icon name="circle" />}
        {localChecked && <Icon name="radio-circle" />}
      </RadioInputContainer>
      {label}
    </RadioContainer>
  );
});

export default Radio;
