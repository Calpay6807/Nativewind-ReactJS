import React from 'react';
import {Input} from './input';
import {useController} from 'react-hook-form';

type InputProps = {
  name: string;
  control: any;
  rules?: any;
};
export function ControllerledInput({
  control,
  name,
  rules,
  ...inputProps
}: InputProps) {
  const {field, fieldState} = useController({control, name, rules});
  return (
    <Input
      ref={field.ref}
      autoCapitalize="none"
      onChange={field.onChange}
      value={field.value}
      {...inputProps}
      error={fieldState.error?.message}
    />
  );
}
