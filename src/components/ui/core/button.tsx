import React from 'react';
import {TouchableOpacity} from './touchableOpacity';
import {Text} from './text';
import {ActivityIndicator, TouchableOpacityProps} from 'react-native';

type Variant = {
  container: string;
  label: string;
  indicator: string;
};
type VariantName = 'defaults' | 'primary' | 'outline' | 'secondary';
type BVariant = {
  [key in VariantName]: Variant;
};

export const buttonVariants: BVariant = {
  defaults: {
    container:
      'flex-row items-center justify-center  rounded-md px-12 py-3 my-2 text-white-50',
    label: 'text-[16px] font-medium text-white-50',
    indicator: ' text-white-50',
  },
  primary: {
    container: 'bg-blue-300 rounded-md ',
    label: ' text-white-50',
    indicator: 'text-inherit',
  },
  secondary: {
    container: 'bg-primary-500 rounded-full',
    label: 'text-white-50',
    indicator: 'text-neutreal-50',
  },
  outline: {
    container: 'border border-neutral-400 rounded-md',
    label: 'text-neutral-600 dark:text-white-50',
    indicator: 'text-black',
  },
};

interface Props extends TouchableOpacityProps {
  variant?: VariantName;
  label?: string;
  loading?: boolean;
}

export const Button = ({
  label,
  loading = false,
  variant = 'primary',
  disabled = false,
  ...props
}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      className={`
  ${buttonVariants.defaults.container}
   ${buttonVariants[variant].container}
   ${disabled ? 'opacity-50' : ''}
  `}
      {...props}>
      {loading ? (
        <ActivityIndicator
          size="small"
          className={`
        ${buttonVariants.defaults.indicator}
         ${buttonVariants[variant].indicator}
        `}
        />
      ) : (
        <Text
          className={`
        ${buttonVariants.defaults.label}
         ${buttonVariants[variant].label}
        `}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};
