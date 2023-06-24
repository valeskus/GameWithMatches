import React from 'react';
import { View } from 'react-native';

import { Button } from '@UI/Button';

import { styles } from './styles';
import { useGamePadController } from './useGamePadController';

interface Props {
  onPlayerMove: (count: number) => void;
  allMatchesCount: number;
}

export function GamePad({ onPlayerMove, allMatchesCount }: Props): JSX.Element {

  const { isDisabledFirst, isDisabledSecond, isDisabledThird } = useGamePadController(allMatchesCount);

  return (
    <View style={styles.gameContainerItem}>
      <View style={styles.gameButton}>
        <Button title="1" onPress={() => onPlayerMove(1)} isDisabled={isDisabledFirst} />
      </View>
      <View style={styles.gameButton}>
        <Button title="2" onPress={() => onPlayerMove(2)} isDisabled={isDisabledSecond} />
      </View>
      <View style={styles.gameButton}>
        <Button title="3" onPress={() => onPlayerMove(3)} isDisabled={isDisabledThird} />
      </View>
    </View>
  );
}
