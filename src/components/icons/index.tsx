import {TouchableOpacity} from '@components/ui/core/touchableOpacity';
import {View} from '@components/ui/core/view';
import React from 'react';
import i18n from '@i18n';
import {Text} from '@components/ui/core/text';
import {Image} from 'react-native';

const İcons = ({changeLanguage}) => {
  return (
    <View className="flex-row justify-center items-center gap-10 ">
      <TouchableOpacity
        onPress={() => changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')}>
        <Image
          width={150}
          height={150}
          source={require('../../assets/facebook.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')}>
        <Image
          width={150}
          height={150}
          source={require('../../assets/insta.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')}>
        <Image
          width={150}
          height={150}
          source={require('../../assets/google.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default İcons;
