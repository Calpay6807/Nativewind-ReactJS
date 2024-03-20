import React from 'react';
import {TouchableOpacity} from './touchableOpacity';
import {Text} from './text';
import {TouchableOpacityProps} from 'react-native';

export const buttonVariants = {
  defaults: {
    container: 'flew-row items-center justify-center',
    label: 'text-white',
  },
  primary: {
    container: 'bg-primary-500',
    label: 'text-black',
  },
  secondary: {container: 'bg-primary-900', label: 'text-white'},
  outline: {container: 'bg-primary-500 border', label: 'text-black'},
};

interface IButtonProps extends TouchableOpacityProps {
  label: string;
  variant?: string;
}

export const Button = ({
  label,
  variant = 'secondary',
  ...props
}: IButtonProps) => {
  return (
    <TouchableOpacity
      className={`${buttonVariants.defaults.container} ${buttonVariants[variant].container}`}
      {...props}>
      <Text
        className={`${buttonVariants.defaults.label} ${buttonVariants[variant].label}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
