import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import { ResultItem } from '@UI/ResultItem';

import { styles } from './styles';
import { useHistoryController } from './useHistoryController';

export function History(): JSX.Element {
  const { history } = useHistoryController();

  return (
    <SafeAreaView style={styles.historyScreen} >
      <ScrollView>
        {history.map((item, index) => {
          return (<View style={styles.historyItem} key={index}>
            <ResultItem
              winner={item.winner}
              AIScore={item.AIScore}
              playerScore={item.playerScore}
            />
          </View>);
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
