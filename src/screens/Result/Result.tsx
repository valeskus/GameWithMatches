import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { Button } from '@UI/Button';

import { styles } from './styles';
import { useResultController } from './useResultController';

export function Result(): JSX.Element {
  const { winner, AIScore, playerScore, goToMenu } = useResultController();

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>{winner} WIN!</Text>
      <View style={styles.resultContainer}>
        <Text style={styles.resultItem}>AI score: {AIScore}</Text>
        <Text style={styles.resultItem}>Player Score: {playerScore}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button title="Restart" onPress={() => { }} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Menu" onPress={goToMenu} />
        </View>
      </View>
    </SafeAreaView>
  );
}
