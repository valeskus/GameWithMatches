import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

interface Props {
  winner: string;
  AIScore: number;
  playerScore: number;
}

export function ResultItem({ winner, AIScore, playerScore }: Props): JSX.Element {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{winner} WIN!</Text>
      <View style={styles.resultContainer}>
        <Text style={styles.resultItem}>AI score: {AIScore}</Text>
        <Text style={styles.resultItem}>Player Score: {playerScore}</Text>
      </View>
    </View>
  );
}
