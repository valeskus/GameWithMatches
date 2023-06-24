import React from 'react';
import { Text, View } from 'react-native';

import { Button } from '@UI/Button';

import { styles } from './styles';
import { UseThreeButtonsPadControllerParams, useThreeButtonsPadController } from './useThreeButtonsPadController';

interface Props extends UseThreeButtonsPadControllerParams {}

export const ThreeButtonsPad = ({
  onPlayerMove,
  availableMatchesPerMove,
}: Props): JSX.Element => {
  const { buttonsList } = useThreeButtonsPadController({ availableMatchesPerMove, onPlayerMove });

  return (
    <View style={styles.gamePadContainer}>
      <Text style={styles.text}>Choose count of matches:</Text>
      <View style={styles.gameContainerItem}>
        {buttonsList.map(({ onPress, title, isDisabled }) => (
          <View style={styles.gameButton} key={title}>
            <Button title={title} onPress={onPress} isDisabled={isDisabled} />
          </View>
        ))}
      </View>
    </View>
  );
};
