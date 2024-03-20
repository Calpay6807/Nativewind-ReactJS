import {styled} from 'nativewind';
import {Text as NText, TextProps} from 'react-native';
import React from 'react';

interface ITextProps extends TextProps {
  variant?: string;
  className?: string;
  children: React.ReactNode;
}

export const SText = styled(NText);

export const textVariants = {
  defaults: 'text-base text-black ',
  h1: 'text-[28px]',
  xl: 'text-[20px]',
  md: '',
  sm: 'text-[14px]',
  lg: 'text-[18px]',
  xs: 'text-[12px]',
  error: '',
};
export const Text = ({
  children,
  variant = 'defaults',
  style,
  className,
  ...props
}: ITextProps) => {
  return (
    <SText
      className={`${textVariants.defaults} ${textVariants[variant]} ${className}`}
      {...props}>
      {children}
    </SText>
  );
};
