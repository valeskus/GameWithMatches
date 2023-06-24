import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useCallback } from 'react';

export const useResultController = () => {
  const { params } =
    useRoute<RouteProp<ReactNavigation.RootParamList, 'Result'>>();
  const navigation = useNavigation();

  const goToMenu = () => {
    navigation.navigate('Home');
  };

  const onRestart = useCallback(() => {
    navigation.navigate('Game', { isAIFirst: params.isAIFirst });
  }, [params]);

  return {
    winner: params.winner,
    AIScore: params.AIScore,
    playerScore: params.playerScore,
    goToMenu,
    onRestart,
  };
};
