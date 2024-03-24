import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Password = () => {
  return (
    <TouchableOpacity>
      <Text
        style={{
          color: 'blue',
          textAlign: 'center',
          marginTop: 30,
        }}>
        Forgot Password ?
      </Text>
    </TouchableOpacity>
  );
};

export default Password;

const styles = StyleSheet.create({});
