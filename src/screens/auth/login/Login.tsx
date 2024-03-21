import React from 'react';
import {Button} from '@components/ui/core/button';
import {Text} from '@components/ui/core/text';
import {SafeAreaView} from '@components/ui/core/view';
import {useColorScheme} from 'nativewind';
import {Title} from '@components/ui/core/title';
import {Screen} from '@components/ui/core/screen';
import {Input} from '@components/ui/core/input/input';
import {_useAuth, signIn} from '@store/auth';
import {useForm} from 'react-hook-form';
import {ControllerledInput} from '@components/ui/core/input/controllerİnput';
import * as z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

const schema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Email is invalid'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password must be more than 6 characters'),
});

const Login = () => {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  const {signIn} = _useAuth();

  const {handleSubmit, control} = useForm({
    resolver: zodResolver(schema),
  });

  const onLogin = () => {
    signIn({
      access: 'access',
      refreshToken: 'refresh',
      name: 'John',
      surname: 'Doe',
      fullName: 'John Doe',
    });
  };
  return (
    <Screen>
      <Title text="Sign-İn" />
      <ControllerledInput control={control} name="email" label="Email" />
      <ControllerledInput control={control} name="password" label="Password" />

      <Button label={'Login'} variant="primary" onPress={() => onLogin()} />
    </Screen>
  );
};

export default Login;
