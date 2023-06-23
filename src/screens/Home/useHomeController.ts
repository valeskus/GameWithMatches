import { useNavigation } from '@react-navigation/native';

export const useHomeController = () => {
  const navigation = useNavigation();

  const startGame = (isAIFirst: boolean) => {
    navigation.navigate('Game', { isAIFirst });
  };

  return { startGame };
};
