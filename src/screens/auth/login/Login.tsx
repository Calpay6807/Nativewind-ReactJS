import React from 'react';
import {Button} from '@components/ui/core/button';
import {Text} from '@components/ui/core/text';
import {SafeAreaView} from '@components/ui/core/view';
import {useColorScheme} from 'nativewind';
import {Title} from '@components/ui/core/title';
import {Screen} from '@components/ui/core/screen';
import {Input} from '@components/ui/core/input/input';

const Login = () => {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white dark:bg-slate-800">
      <Screen>
        <Input />
        <Title text="Sign-İn" />
        <Text className="text-black dark:text-white">
          {colorScheme} Reloading connected apps...
        </Text>
        <Button label={'Login'} onPress={() => toggleColorScheme()} />
        <Button label={'Login'} onPress={() => toggleColorScheme()} />
        <Button
          label={'Login'}
          variant="secondary"
          onPress={() => toggleColorScheme()}
        />
      </Screen>
    </SafeAreaView>
  );
};

export default Login;
