import React from 'react';
import { SafeAreaView, TextInput, Text, View } from 'react-native';

import { Button } from '@UI/Button';

import { styles } from './styles';
import { useOptionController } from './useOptionController';

export function Options(): JSX.Element {
  const { setAllMatches, setMatchesPerMove, onSubmit, invalidAllMatches, invalidPerMove } = useOptionController();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.itemsContainer}>
        <View style={styles.optionItem}>
          <View style={styles.labelItem}>
            <Text style={styles.label}>Enter the number of matches for pile:</Text>
            {invalidAllMatches && (<Text style={styles.error}>
              The number of matches for the pile must be an odd number !
            </Text>)}
          </View>
          <TextInput style={styles.input} maxLength={3} keyboardType="numeric"
            onChangeText={(value) => setAllMatches(+value)}
          />
        </View>
        <View style={styles.optionItem}>
          <View style={styles.labelItem}>
            <Text style={styles.label}>Enter the number of matches for one move:</Text>
            {invalidPerMove && (<Text style={styles.error}>
              The number of matches for one move must be more than 1!
            </Text>)}

          </View>
          <TextInput style={styles.input} maxLength={3} keyboardType="numeric"
            onChangeText={(value) => setMatchesPerMove(+value)}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onSubmit} title="Submit" />
      </View>
    </SafeAreaView>
  );
}
