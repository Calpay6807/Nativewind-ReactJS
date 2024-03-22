import React = require('react');
import {View} from './view';
type Props = {
  children: React.ReactNode;
};

export const Screen = ({children}: Props) => {
  return <View className="flex-1 justify-center m-3">{children}</View>;
};
