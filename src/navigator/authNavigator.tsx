import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/auth/login/Login';
import {AppScreens} from '../constant/appScreens';
import Register from '../screens/auth/register/Register';

const Stack = createStackNavigator();
export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AppScreens.Login} component={Login} />
      <Stack.Screen name={AppScreens.Register} component={Register} />
    </Stack.Navigator>
  );
};
