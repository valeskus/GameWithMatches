import React from 'react';
import { SafeAreaView } from 'react-native';

import { Button } from '@UI/Button';

import { styles } from './styles';
import { useHomeController } from './useHomeController';

export function Home(): JSX.Element {
  const { startGame } = useHomeController();

  return (
    <SafeAreaView style={styles.homeScreen}>
      <Button onPress={() => startGame(true)} title={'Start (AI firs)'} />
      <Button onPress={() => startGame(false)} title={'Start (Player firs)'} />
    </SafeAreaView>
  );
}
