import React from 'react';
import { SafeAreaView } from 'react-native';

import { Button } from '@UI/Button';

import { styles } from './styles';

export function Home(): JSX.Element {
  return (
    <SafeAreaView style={styles.homeScreen}>
      <Button onPress={() => { }} title={'Start (AI firs)'} />
      <Button onPress={() => { }} title={'Start (Player firs)'} />
    </SafeAreaView>
  );
}
