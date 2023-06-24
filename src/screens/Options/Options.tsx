import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { Button } from '@UI/Button';
import { Input } from '@UI/Input';

import { styles } from './styles';
import { useOptionController } from './useOptionController';

export function Options(): JSX.Element {
  const { setAllMatches, setMatchesPerMove, onSubmit, invalidAllMatches, invalidPerMove, matchesPerMove,
    allMatches } = useOptionController();

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
          <Input onChange={(value) => setAllMatches(value)} value={allMatches}/>
        </View>
        <View style={styles.optionItem}>
          <View style={styles.labelItem}>
            <Text style={styles.label}>Enter the number of matches for one move:</Text>
            {invalidPerMove && (<Text style={styles.error}>
              The number of matches for one move must be more than 1!
            </Text>)}

          </View>
          <Input onChange={(value) => setMatchesPerMove(value)} value={matchesPerMove}/>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onSubmit} title="Submit" />
      </View>
    </SafeAreaView>
  );
}
