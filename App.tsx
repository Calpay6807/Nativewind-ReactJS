import * as React from 'react';
import {AuthNavigator} from '../appNative/src/navigator/authNavigator';
import NavigationContainers from '../appNative/src/navigator/navigationContainer';
import {TabNavigator} from './src/navigator/tabNavigator';
import {_useAuth, signIn, signOut} from '@store/auth';

export default function App() {
  const {status} = _useAuth();
  React.useEffect(() => {}, [status]); // Bağımlılık dizisine status eklendi

  return (
    <NavigationContainers>
      {status === 'signIn' ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainers>
  );
}
