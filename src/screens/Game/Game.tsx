import React from 'react';
import { SafeAreaView } from 'react-native';

import { styles } from './styles';

export function Game(): JSX.Element {
  return (
    <SafeAreaView style={styles.gameScreen} />
  );
}
