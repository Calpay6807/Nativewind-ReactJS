import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from '../appNative/src/navigator/authNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
