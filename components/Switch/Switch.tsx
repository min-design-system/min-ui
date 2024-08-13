import { ChangeEvent, forwardRef, useEffect, useState } from 'react';

import { Circle, SwitchContainer, SwitchInput } from './Switch.styles';
import { SwitchProps } from './Switch.typing';

const Switch = forwardRef<HTMLDivElement, SwitchProps>(function Switch(
  { size, onChange, checked, ...props },
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
    <SwitchContainer ref={ref} size={size} checked={localChecked}>
      <SwitchInput type="checkbox" onChange={handleChange} checked={localChecked} {...props} />
      <Circle size={size} checked={localChecked} />
    </SwitchContainer>
  );
});

export default Switch;
