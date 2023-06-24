import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { Button } from '@UI/Button';

import { styles } from './styles';
import { useGameController } from './useGameController';

export function Game(): JSX.Element {
  const { isAIMove, onPlayerMove, aiMove, playerMove, playerScore, allMatches, goToResult } = useGameController();

  return (
    <SafeAreaView style={styles.gameScreen}>
      <View style={styles.gameContainerItem}>
        <Text style={styles.gameMoveItem}>Matches in pick: </Text>
        <Text style={styles.moveText}>{allMatches}</Text>
      </View>
      <View style={styles.gameContainer}>
        <View style={styles.gameContainerItem}>
          <Text style={styles.gameMoveItem}> AI:</Text>
          <Text style={styles.moveText}> move {aiMove} matches</Text>
        </View>
        <View style={styles.gameContainerItem}>
          <Text style={styles.gameMoveItem}> Player:</Text>
          <Text style={styles.moveText}> move {playerMove} matches</Text>
        </View>
      </View>
      {allMatches > 0 && <Text style={styles.text}>Choose count of matches:</Text>}
      {allMatches === 0 && (<View style={styles.resultButtonContainer}>
        <Button title="Result" onPress={goToResult} />
      </View>)}
      {allMatches > 0 && (<View style={styles.gameContainerItem}>
        <View style={styles.gameButton}>
          <Button title="1" onPress={() => onPlayerMove(1)} isDisabled={isAIMove} />
        </View>
        <View style={styles.gameButton}>
          <Button title="2" onPress={() => onPlayerMove(2)} isDisabled={isAIMove} />
        </View>
        <View style={styles.gameButton}>
          <Button title="3" onPress={() => onPlayerMove(3)} isDisabled={isAIMove} />
        </View>
      </View>)
      }

      <View style={styles.scoreContainer}>
        <Text style={styles.gameMoveItem}> Your score: </Text>
        <Text style={styles.moveText}>{playerScore}</Text>
      </View>
    </SafeAreaView >
  );
}
