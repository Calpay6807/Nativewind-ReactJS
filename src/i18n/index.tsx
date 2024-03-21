import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import {resources} from './resources';

i18n.use(initReactI18next).init({
  resources,

  fallbackLng: 'en',
  compatibilityJSON: 'v3',

  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});
export default i18n;
