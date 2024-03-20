import React = require('react');
import {View} from './view';
type Props = {
  children: React.ReactNode;
};

export const Screen = ({children}: Props) => {
  return (
    <View className="flex-1 justify-center items-center px-6">{children}</View>
  );
};
