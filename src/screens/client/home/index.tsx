import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getToken} from '@store/auth/utils';
import {Button} from '@components/ui/core/button';
import {signOut} from '@store/auth';

const Home = () => {
  const token = getToken();
  return (
    <View>
      <Text>
        {token.access}
        {token.refreshToken}
      </Text>
      <Button label={'Login'} variant="secondary" onPress={() => signOut()} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
