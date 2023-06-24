import React from 'react';
import { Text, View } from 'react-native';

import { Input } from '@UI/Input';
import { Button } from '@UI/Button';

import { styles } from './styles';
import { UseInputPadControllerParams, useInputPadController } from './useInputPadController';

interface Props extends UseInputPadControllerParams { }

export const InputPad = ({
  availableMatchesPerMove,
  allMatchesCount,
  onPlayerMove,
}: Props): JSX.Element => {
  const {
    isCountInvalid,
    count,
    onValueChange,
    onSubmit,
    validate,
  } = useInputPadController({
    availableMatchesPerMove,
    allMatchesCount,
    onPlayerMove,
  });

  return (
    <View style={styles.gamePadContainer}>
      <View style={styles.inputContainer}>
        <View style={styles.labelItem}>
          <Text style={styles.text}>Enter count of matches:</Text>
          {isCountInvalid && <Text style={styles.error}>Invalid!</Text>}
        </View>
        <Input
          onBlur={validate}
          onSubmitEditing={validate}
          onChangeText={onValueChange}
          value={count.toString()}
        />
      </View>
      <Button title="Submit" onPress={onSubmit} isDisabled={isCountInvalid} />
    </View>
  );
};
