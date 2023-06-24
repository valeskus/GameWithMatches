import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './styles';

interface Props {
  onChange: (value: number) => void;
  value?: number;
}

export function Input({ onChange, value }: Props): JSX.Element {
  return (
    <TextInput style={styles.input} maxLength={3} keyboardType="numeric"
      onChangeText={(count) => onChange(+count)}
      defaultValue={`${value}`}
      selectTextOnFocus={true}
    />
  );
}
