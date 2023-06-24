import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

export const useResultController = () => {
  const { params } =
    useRoute<RouteProp<ReactNavigation.RootParamList, 'Result'>>();
  const navigation = useNavigation();

  const goToMenu = () => {
    navigation.navigate('Home');
  };

  return {
    winner: params.winner,
    AIScore: params.AIScore,
    playerScore: params.playerScore,
    goToMenu,
  };
};
