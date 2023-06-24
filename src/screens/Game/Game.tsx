import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { Button } from '@UI/Button';

import { GamePad } from '@components/GamePad';

import { styles } from './styles';
import { useGameController } from './useGameController';

export function Game(): JSX.Element {
  const { onPlayerMove, aiMove, playerMove, playerScore, allMatches, goToResult, matchesPerMove } = useGameController();

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
      {allMatches === 0 && (<View style={styles.resultButtonContainer}>
        <Button title="Result" onPress={goToResult} />
      </View>)}
      {allMatches > 0 && (<GamePad
        onPlayerMove={onPlayerMove}
        allMatchesCount={allMatches}
        matchesPerMove={matchesPerMove}
                          />
      )}
      <View style={styles.scoreContainer}>
        <Text style={styles.gameMoveItem}> Your score: </Text>
        <Text style={styles.moveText}>{playerScore}</Text>
      </View>
    </SafeAreaView >
  );
}
