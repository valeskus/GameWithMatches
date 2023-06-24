import React from 'react';
import { Text, View } from 'react-native';

import { Button } from '@UI/Button';
import { Input } from '@UI/Input';

import { styles } from './styles';
import { useGamePadController } from './useGamePadController';

interface Props {
  onPlayerMove: (count: number) => void;
  allMatchesCount: number;
  matchesPerMove: number;
}

export function GamePad({ onPlayerMove, allMatchesCount, matchesPerMove }: Props): JSX.Element {

  const { isDisabledFirst,
    isDisabledSecond,
    isDisabledThird,
    isCountInvalid,
    onSubmit,
    setCount,
    count,
  } = useGamePadController(allMatchesCount, matchesPerMove, onPlayerMove);

  return (
    <View style={styles.gamePadContainer}>

      {matchesPerMove <= 3 && (<>
        <Text style={styles.text}>Choose count of matches:</Text>
        <View style={styles.gameContainerItem}>
          <View style={styles.gameButton}>
            <Button title="1" onPress={() => onPlayerMove(1)} isDisabled={isDisabledFirst} />
          </View>
          {matchesPerMove > 1 && (<View style={styles.gameButton}>
            <Button title="2" onPress={() => onPlayerMove(2)} isDisabled={isDisabledSecond} />
          </View>)}
          {matchesPerMove > 2 && (<View style={styles.gameButton}>
            <Button title="3" onPress={() => onPlayerMove(3)} isDisabled={isDisabledThird} />
          </View>)}
        </View>
      </>)
      }
      {matchesPerMove > 3 && (<View style={styles.gamePadContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.labelItem}>
            <Text style={styles.text}>Enter count of matches:</Text>
            {isCountInvalid && <Text style={styles.error}>Invalid!</Text>}
          </View>
          <Input onChange={value => setCount(value)} value={count} />
        </View>
        <Button title="Submit" onPress={onSubmit} />
      </View>)

      }

    </View>
  );
}
