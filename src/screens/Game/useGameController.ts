import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

export const useGameController = () => {
  const { params } =
    useRoute<RouteProp<ReactNavigation.RootParamList, 'Game'>>();

  const navigation = useNavigation();
  const goToResult = () => {
    navigation.navigate('Result', {
      winner: 'AI',
      AIScore: 20,
      PlayerScore: 5,
    });
  };

  return {
    isAIFirst: params.isAIFirst,
    goToResult,
  };
};
