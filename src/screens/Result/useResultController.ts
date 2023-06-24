import { CommonActions, useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

import * as GameHistoryStore from '@stores/gameHistory';

export const useResultController = () => {
  const navigation = useNavigation();

  const { history } = GameHistoryStore.useGameHistoryStore();

  const { winner, AIScore, playerScore } = history[history.length - 1] || {
    winner: 'N/A',
    AIScore: NaN,
    playerScore: NaN,
  };

  const goToMenu = useCallback(() => {
    navigation.dispatch(CommonActions.reset({
      index: 0,
      routes: [
        {
          name: 'Home',
        },
      ],
    }));
  }, []);

  return {
    winner,
    AIScore,
    playerScore,
    goToMenu,
  };
};
