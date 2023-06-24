import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';

import { Button } from '@UI/Button';
import { Icons } from '@UI/Icons';

import { styles } from './styles';
import { useHomeController } from './useHomeController';

export function Home(): JSX.Element {
  const { startGameAIFist, startGamePlayerFist, goToHistory, goToOptions } = useHomeController();

  return (
    <SafeAreaView style={styles.homeScreen}>
      <View style={styles.homeScreenItem}>
        <Image source={Icons.matchbox} style={styles.image} />
        <Text style={styles.title}>Game with Matches</Text>
      </View>
      <View style={styles.menuList}>
        <View style={styles.menuItem}>
          <Button onPress={startGameAIFist} title="Start (AI first)" />
          <Button onPress={startGamePlayerFist} title="Start (Player first)" />
        </View>
        <View style={styles.menuItem}>
          <Button onPress={goToOptions} title="Game options" />
        </View>
        <View style={styles.menuItem}>
          <Button onPress={goToHistory} title="History" />
        </View>
      </View>
    </SafeAreaView>
  );
}
