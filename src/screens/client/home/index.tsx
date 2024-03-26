import React from 'react';
import {getToken} from '@store/auth/utils';
import {Button} from '@components/ui/core/button';
import {signOut} from '@store/auth';
import {StyledScrollView} from '@components/ui/core/scrollview';
import {View} from '@components/ui/core/view';
import {Text as LText} from 'react-native';
import {styled} from 'nativewind';

const Home = () => {
  const token = getToken();
  const TextLogin = styled(LText, {});
  return (
    <StyledScrollView showsVerticalScrollIndicator={false} className="bg-white">
      <View className="flex-1 px-4 py-4">
        <Button label={'Logout'} variant="outline" onPress={() => signOut()} />
      </View>
    </StyledScrollView>
  );
};

export default Home;
