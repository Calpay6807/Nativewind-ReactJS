import React from 'react';
import {getToken} from '@store/auth/utils';
import {Button} from '@components/ui/core/button';
import {signOut} from '@store/auth';
import {Screen} from '@components/ui/core/screen';
import {StyledScrollView} from '@components/ui/core/scrollview';
import {View} from '@components/ui/core/view';
import {Text} from 'react-native';
import {Text as LText} from 'react-native';
import {styled} from 'nativewind';

const Home = () => {
  const token = getToken();
  const TextLogin = styled(LText, {});
  return (
    <StyledScrollView showsVerticalScrollIndicator={false} className="bg-white">
      <View className="flex-1 px-4 py-4">
        <View className="w-full mt-5 items-center justify-center">
          <View className="rounded-full w-28 h-28 bg-blue-500 items-center justify-center">
            <TextLogin className="text-4xl text-white">AÇ</TextLogin>
          </View>
        </View>
        <View className="w-full items-center mt-3">
          <TextLogin className="text-xl font-bold">Alpay Çal</TextLogin>
          <TextLogin className="text-xs font-extralight">
            Alpaycal125@gmail.com
          </TextLogin>
          <TextLogin className="text-xs font-extralight">
            +90 555 555 55 55
          </TextLogin>
          <Button
            label={'Logout'}
            variant="outline"
            onPress={() => signOut()}
          />
        </View>
      </View>
    </StyledScrollView>
  );
};

export default Home;
