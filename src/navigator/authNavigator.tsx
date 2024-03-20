import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/auth/login/Login';
import {AppScreens} from '../constant/appScreens';

const Stack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AppScreens.Login} component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
