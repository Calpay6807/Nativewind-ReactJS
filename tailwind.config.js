const colors = require('./src/components/ui/theme/color');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  colors: {
    ...colors,
  },
  fontFamily: {
    interBoldAndroid: ['Inter-Bold'],
    interBoldIos: ['Inter-Bold'],
    interSemiBoldAndroid: ['Inter-SemiBold'],
    interSemiBoldIos: ['Inter-SemiBold'],
    interMediumAndroid: ['Inter-Medium'],
    interMediumIos: ['Inter-Medium'],
    interRegularAndroid: ['Inter-Regular'],
    interRegularIos: ['Inter-Regular'],
    interLightAndroid: ['Inter-Light'],
    interLightIos: ['Inter-Light'],
    interExtraBoldAndroid: ['Inter-ExtraBold'],
    interExtraBoldIos: ['Inter-ExtraBold'],
    interDarkAndroid: ['Inter-Dark'],
    interDarkIos: ['Inter-Dark'],
    interThinAndroid: ['Inter-Thin'],
    interThinIos: ['Inter-Thin'],
  },
};
