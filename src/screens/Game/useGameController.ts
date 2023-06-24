import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import * as GameHistoryStore from '@stores/gameHistory';

import { ResultItemModel } from 'src/models';

export const useGameController = () => {
  const { params } =
    useRoute<RouteProp<ReactNavigation.RootParamList, 'Game'>>();

  const navigation = useNavigation();
  const addGameHistory = GameHistoryStore.useAddGameHistory();

  const goToResult = () => {
    const result: ResultItemModel = {
      winner: 'AI',
      AIScore: 20,
      playerScore: 5,
    };
    addGameHistory(result);
    navigation.navigate('Result', result);
  };

  return {
    isAIFirst: params.isAIFirst,
    goToResult,
  };
};
