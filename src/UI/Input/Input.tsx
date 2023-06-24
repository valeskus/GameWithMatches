import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

export function Input(props: TextInputProps): JSX.Element {
  return (
    <TextInput
      {...props}
      style={styles.input}
      maxLength={3}
      keyboardType="numeric"
      selectTextOnFocus={true}
    />
  );
}
