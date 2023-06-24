import { useNavigation } from '@react-navigation/native';

export const useHomeController = () => {
  const navigation = useNavigation();

  const startGame = (isAIFirst: boolean) => {
    navigation.navigate('Game', { isAIFirst });
  };

  const goToHistory = () => {
    navigation.navigate('History');
  };

  const goToOptions = () => {
    navigation.navigate('Options');
  };

  return {
    startGameAIFist: () => startGame(true),
    startGamePlayerFist: () => startGame(false),
    goToHistory,
    goToOptions,
  };
};
