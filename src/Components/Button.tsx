import React from "react";
import {TouchableOpacity, StyleSheet, Text, TouchableOpacityProps} from 'react-native';

interface ButtonProp extends TouchableOpacityProps {
  text: string
}

export const Button = ({ text, ...rest }: ButtonProp) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.button}
      {...rest}
    >
      <Text style={styles.buttonText}>{ text }</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})
