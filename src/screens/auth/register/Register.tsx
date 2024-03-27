import React from 'react';
import {Button} from '@components/ui/core/button';
import {Text} from '@components/ui/core/text';
import {useColorScheme} from 'nativewind';
import {Title} from '@components/ui/core/title';
import {Screen} from '@components/ui/core/screen';
import {_useAuth, signIn} from '@store/auth';
import {useForm} from 'react-hook-form';
import * as z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useTranslation} from 'react-i18next';
import i18n from '@i18n';
import ControllerledInput from '@components/ui/core/input/controllerİnput';
import {Image} from 'react-native';
import {TouchableOpacity} from '@components/ui/core/touchableOpacity';
import İcons from '@components/icons';
import Password from '@components/password';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import {useNavigation} from '@react-navigation/native';
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

const Register = () => {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  const {signIn} = _useAuth();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language); // Burada i18n nesnesini kullanın
  };

  const {
    handleSubmit,
    control,
    formState: {isValid},
    getValues,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: 'alpaycal1235@gmail.com',
      password: '123456',
    },
  });

  const onRegister = () => {
    if (isValid) {
      const {email, password} = getValues();
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
          showMessage({
            message: 'User account created & signed in!',

            type: 'success',
          });
          signIn({
            access: 'access',
            refreshToken: 'refresh',
            name: 'John',
            surname: 'Doe',
            fullName: 'John Doe',
          });
        })
        .catch(error => {
          let message = '';
          if (error.code === 'auth/email-already-in-use') {
            message = 'that email address is already use';
          }

          if (error.code === 'auth/invalid-email') {
            message = 'That email address is invalid!';
          }

          showMessage({
            message: message,

            type: 'danger',
          });

          console.error(error);
        });
    }
  };
  return (
    <Screen>
      <TouchableOpacity
        className="absolute top-5 right-5 items-center"
        onPress={() => changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')}>
        <Image
          width={150}
          height={150}
          source={require('../../../assets/language.png')}
        />
        <Text variant="lg">{i18n.language}</Text>
      </TouchableOpacity>
      <Title text={t('signUp.title')} />
      <ControllerledInput control={control} name="email" label="Email" />
      <ControllerledInput control={control} name="password" label="Password" />

      <Button
        style={{marginTop: 20, marginBottom: 20}}
        label={'Register'}
        variant="primary"
        onPress={() => onRegister()}
      />
      <İcons changeLanguage={changeLanguage} />
      <Password />
    </Screen>
  );
};

export default Register;
