import React, {useCallback, useState} from 'react';
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
  const [isFocused, setİsFocused] = useState(false);
  const {colorScheme} = useColorScheme();
  const isDark = colorScheme === 'dark';

  const borderColor = error
    ? 'border-danger-600'
    : isFocused
    ? 'border-teal-100'
    : 'border-neutral-600';

  const bgColor = isDark
    ? 'bg-charcoal-800'
    : error
    ? 'bg-danger-500'
    : 'bg-neutral-200';

  const onFocus = useCallback(() => {
    setİsFocused(true);
  }, []);
  const onBlur = useCallback(() => {
    setİsFocused(false);
  }, []);
  return (
    <View className="mb-4">
      {/* {label && (
        <Text
          variant="md"
          className={
            error ? 'text-red-500' : isDark ? 'text-white' : 'text-black'
          }>
          {label}
        </Text>
      )} */}
      <STextInput
        className={`border-b-[1px] py-4 px-2 w-[350px] ${borderColor} rounded-full `}
        {...props}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={label}
      />
      {error && <Text className="text-red-500">{error}</Text>}
    </View>
  );
};
