import {styled} from 'nativewind';
import {Text as NText, TextProps} from 'react-native';
import React from 'react';
import fonts from '../theme/fonts';

interface ITextProps extends TextProps {
  variant?: string;
  className?: string;
  children: React.ReactNode;
}

export const SText = styled(NText);

export const textVariants = {
  defaults: 'text-base text-black ',
  h1: `text-[28px] `,
  xl: `text-[20px] `,
  md: '',
  sm: `text-[14px] `,
  lg: `text-[18px] ${fonts.interExtraBold}`,
  xs: '`text-[12px] ${fonts.interBold}`',
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
      className={`${className} ${textVariants.defaults} ${textVariants[variant]} `}
      {...props}>
      {children}
    </SText>
  );
};
