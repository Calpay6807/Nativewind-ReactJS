import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getToken} from '@store/auth/utils';
import {Button} from '@components/ui/core/button';
import {signOut} from '@store/auth';
import {Screen} from '@components/ui/core/screen';

const Home = () => {
  const token = getToken();
  return (
    <Screen>
      <Text>
        {token.access}
        {token.refreshToken}
      </Text>
      <Button label={'Logout'} variant="secondary" onPress={() => signOut()} />
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({});
