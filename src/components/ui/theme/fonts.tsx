import {Platform} from 'react-native';

const fonts = {
  interBold:
    Platform.OS === 'android' ? 'fonts-interBoldAndroid' : 'fonts-interBoldIos',
  interSemiBold:
    Platform.OS === 'android'
      ? 'fonts-interSemiBoldAndroid'
      : 'fonts-interSemiBoldIos',
  interMedium:
    Platform.OS === 'android'
      ? 'fonts-interMediumAndroid'
      : 'fonts-interMediumIos',
  interRegular:
    Platform.OS === 'android'
      ? 'fonts-interRegularAndroid'
      : 'fonts-interRegularIos',
  interLight:
    Platform.OS === 'android'
      ? 'fonts-interLightAndroid'
      : 'fonts-interLightIos',

  interExtraBold:
    Platform.OS === 'android'
      ? 'fonts-interExtraBoldAndroid'
      : 'fonts-interExtraBoldIos',
  interDark:
    Platform.OS === 'android' ? 'fonts-interDarkAndroid' : 'fonts-interDarkIos',
  interThin:
    Platform.OS === 'android' ? 'fonts-interThinAndroid' : 'fonts-interThinIos',
};
export default fonts;
