import React from 'react';
import { Keyboard, KeyboardAvoidingView, SafeAreaView, Text, View } from 'react-native';

import { Button } from '@UI/Button';
import { Input } from '@UI/Input';

import { styles } from './styles';
import { useOptionController } from './useOptionController';

export function Options(): JSX.Element {
  const {
    allMatchesInputErrorMessage,
    matchesPerMoveInputErrorMessage,
    validateAllMatchesInput,
    validateMatchesPerMoveInput,
    onChangeAllMatches,
    onChangeMatchesPerMove,
    onApply,
    matchesPerMove,
    allMatches,
    isApplyDisabled,
  } = useOptionController();

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView onTouchStart={Keyboard.dismiss} style={styles.container}>
        <View style={styles.itemsContainer}>
          <View style={styles.optionItem}>
            <View style={styles.labelItem}>
              <Text style={styles.label}>Enter the number of matches for pile:</Text>
              {!!allMatchesInputErrorMessage && (
                <Text style={styles.error}>
                  {allMatchesInputErrorMessage}
                </Text>
              )}
            </View>
            <Input
              onChangeText={onChangeAllMatches}
              value={allMatches.toString()}
              onSubmitEditing={validateAllMatchesInput}
              onBlur={validateAllMatchesInput}
            />
          </View>
          <View style={styles.optionItem}>
            <View style={styles.labelItem}>
              <Text style={styles.label}>Enter the number of matches for one move:</Text>
              {!!matchesPerMoveInputErrorMessage && (
                <Text style={styles.error}>
                  {matchesPerMoveInputErrorMessage}
                </Text>
              )}
            </View>
            <Input
              onChangeText={onChangeMatchesPerMove}
              value={matchesPerMove.toString()}
              onSubmitEditing={validateMatchesPerMoveInput}
              onBlur={validateMatchesPerMoveInput}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button isDisabled={isApplyDisabled} onPress={onApply} title="Apply" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
