import React from 'react';
import { Pressable, Text } from 'react-native';

import { styles } from './styles';

interface Props {
  onPress: () => void;
  title: string;
  isDisabled?: boolean;
}

export function Button({ onPress, title, isDisabled }: Props): JSX.Element {
  return (
    <Pressable
      disabled={isDisabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed]
      }
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}
