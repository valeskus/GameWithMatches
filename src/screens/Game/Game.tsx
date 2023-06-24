import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';

import { Icons } from '@UI/Icons';

import { GamePad } from '@components/GamePad';

import { styles } from './styles';
import { useGameController } from './useGameController';

export function Game(): JSX.Element {
  const {
    onPlayerMove,
    AILastMove,
    playerLastMove,
    playerScore,
    matchesLeft,
    matchesPerMove,
    isAIMove,
  } = useGameController();

  const showGamePad = !isAIMove && matchesLeft > 0;

  return (
    <SafeAreaView style={styles.gameScreen} onTouchStart={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.gameContainerItem}>
          <View style={styles.imageBox}>
            <Image source={Icons.matchbox} style={styles.image} />
            <Text style={styles.gameMoveItem}>Matches in pick: </Text>
          </View>
          <Text style={styles.gameMoveItem}>{matchesLeft}</Text>
        </View>
        <View style={styles.gameContainer}>
          {isAIMove && (
            <View style={styles.row}>
              <Text style={styles.title}>AI is picking</Text>
              <ActivityIndicator />
            </View>
          )}
          {!isAIMove && (
            <View style={styles.row}>
              <Text style={styles.title}>Player is picking</Text>
              <ActivityIndicator />
            </View>
          )}

          <View style={[styles.gameContainerItem, isAIMove && styles.highlight]}>
            <Text style={styles.gameMoveItem}>AI:</Text>
            <Text style={styles.moveText}>picked {AILastMove} matches</Text>
          </View>
          <View style={[styles.gameContainerItem, !isAIMove && styles.highlight]}>
            <Text style={styles.gameMoveItem}>Player:</Text>
            <Text style={styles.moveText}>picked {playerLastMove} matches</Text>
          </View>
        </View>
        {!showGamePad && <View style={{ flex: 1 }} />}
        {showGamePad && (
          <GamePad
            onPlayerMove={onPlayerMove}
            allMatchesCount={matchesLeft}
            availableMatchesPerMove={matchesPerMove}
          />
        )}
        <View style={styles.scoreContainer}>
          <Text style={styles.gameMoveItem}>Matches in hand: </Text>
          <Text style={styles.moveText}>{playerScore}</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView >
  );
}
