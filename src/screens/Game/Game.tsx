import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { Button } from '@UI/Button';

import { styles } from './styles';

export function Game(): JSX.Element {

  return (
    <SafeAreaView style={styles.gameScreen}>
      <View style={styles.gameContainerItem}>
        <Text style={styles.gameMoveItem}>Matches in pick: </Text>
        <Text style={styles.moveText}> 3</Text>
      </View>
      <View style={styles.gameContainer}>
        <View style={styles.gameContainerItem}>
          <Text style={styles.gameMoveItem}> AI:</Text>
          <Text style={styles.moveText}> move 3 matches</Text>
        </View>
        <View style={styles.gameContainerItem}>
          <Text style={styles.gameMoveItem}> Player:</Text>
          <Text style={styles.moveText}> move 3 matches</Text>
        </View>
      </View>
      <Text style={styles.text}>Choose count of matches:</Text>
      <View style={styles.gamePad}>
        <View style={styles.gameButton}>
          <Button title="1" onPress={() => { }} />
        </View>
        <View style={styles.gameButton}>
          <Button title="2" onPress={() => { }} />
        </View>
        <View style={styles.gameButton}>
          <Button title="3" onPress={() => { }} />
        </View>
      </View>

    </SafeAreaView>
  );
}
