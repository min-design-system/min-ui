import { ChangeEvent, forwardRef, useEffect, useState } from 'react';

import Icon from '@components/Icon';

import { CheckboxContainer, CheckboxInputContainer, CheckboxInput } from './Checkbox.styles';
import { CheckboxProps } from './Checkbox.typing';

const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>(function Checkbox(
  { label, size, checked, disabled, indeterminate, onChange, ...props },
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
    <CheckboxContainer ref={ref} size={size} disabled={disabled}>
      <CheckboxInputContainer
        checked={localChecked}
        disabled={disabled}
        indeterminate={indeterminate}
      >
        <CheckboxInput
          type="checkbox"
          onChange={handleChange}
          checked={localChecked}
          disabled={disabled}
          {...props}
        />
        {!localChecked && <Icon name="square" />}
        {localChecked && <Icon name={indeterminate ? 'remove-square-fill' : 'check-square-fill'} />}
      </CheckboxInputContainer>
      {label}
    </CheckboxContainer>
  );
});

export default Checkbox;
