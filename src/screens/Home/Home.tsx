import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { Button } from '@UI/Button';

import { styles } from './styles';
import { useHomeController } from './useHomeController';

export function Home(): JSX.Element {
  const { startGame, goToHistory, goToOptions } = useHomeController();

  return (
    <SafeAreaView style={styles.homeScreen}>
      <View style={styles.homeScreenItem}>
        <Text>Game with Matches</Text>
      </View>
      <View style={styles.menuList}>
        <View style={styles.menuItem}>
          <Button onPress={() => startGame(true)} title={'Start (AI firs)'} />
          <Button onPress={() => startGame(false)} title={'Start (Player firs)'} />
        </View>
        <View style={styles.menuItem}>
          <Button onPress={goToOptions} title={'Game options'} />
        </View>
        <Button onPress={goToHistory} title={'History'} />
      </View>

    </SafeAreaView>
  );
}
