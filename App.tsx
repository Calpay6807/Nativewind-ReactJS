import * as React from 'react';
import {AuthNavigator} from '../appNative/src/navigator/authNavigator';
import NavigationContainers from '../appNative/src/navigator/navigationContainer';
import {TabNavigator} from './src/navigator/tabNavigator';
import {_useAuth, signIn, signOut} from '@store/auth';
import FlashMessage from 'react-native-flash-message';
import {
  getFCMToken,
  notificationListener,
  requestUserPermission,
} from '@utils/notification';

export default function App() {
  const {status} = _useAuth();
  React.useEffect(() => {
    requestUserPermission();
    // android notification
    // getFCMToken();
    // notificationListener()
  }, [status]); // Bağımlılık dizisine status eklendi
  const flashMessageRef = React.useRef();
  return (
    <NavigationContainers>
      {status === 'signIn' ? <TabNavigator /> : <AuthNavigator />}

      <FlashMessage position="top" ref={flashMessageRef} />
    </NavigationContainers>
  );
}
