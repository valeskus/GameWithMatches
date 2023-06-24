import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { Button } from '@UI/Button';
import { ResultItem } from '@UI/ResultItem';

import { styles } from './styles';
import { useResultController } from './useResultController';

export function Result(): JSX.Element {
  const { winner, AIScore, playerScore, goToMenu } = useResultController();

  return (
    <SafeAreaView style={styles.screen}>
      <ResultItem winner={winner} AIScore={AIScore} playerScore={playerScore} />
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
