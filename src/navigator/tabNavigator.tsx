import React from 'react';
import {AppScreens} from '../constant/appScreens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/client/home/index';

const Tab = createBottomTabNavigator();
export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={AppScreens.Home} component={Home} />
      <Tab.Screen name={AppScreens.Profile} component={Home} />
    </Tab.Navigator>
  );
};
