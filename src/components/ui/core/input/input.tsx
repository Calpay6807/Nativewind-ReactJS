import React from 'react';
import {TextInput, TextInputProps, useColorScheme} from 'react-native';
import {styled} from 'nativewind';
import {View} from '../view';
import {Text} from '../text';

const STextInput = styled(TextInput);

interface Props extends TextInputProps {
  disabled?: boolean;
  label?: string;
  error?: string;
}

export const Input = ({
  label = '',
  disabled = false,
  error = '',
  ...props
}: Props) => {
  const {colorScheme} = useColorScheme();
  const isDark = colorScheme === 'dark';
  return (
    <View>
      {label && (
        <Text
          variant="md"
          className={
            error ? 'text-red-500' : isDark ? 'text-charcoal-100' : 'text-black'
          }>
          {label}
        </Text>
      )}
      <STextInput className="border-[1px] py-4 px-2" />
    </View>
  );
};
