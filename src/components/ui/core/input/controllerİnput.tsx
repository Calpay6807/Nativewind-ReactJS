import React from 'react';
import {Input} from './input';
import {useController} from 'react-hook-form';

type InputProps = {
  name: string;
  control: any;
  rules?: any;
};

const ControllerledInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({control, name, rules, ...inputProps}, ref) => {
    const {field, fieldState} = useController({control, name, rules});

    return (
      <Input
        ref={ref}
        autoCapitalize="none"
        onChange={field.onChange}
        value={field.value}
        {...inputProps}
        error={fieldState.error?.message}
      />
    );
  },
);

export default ControllerledInput;
