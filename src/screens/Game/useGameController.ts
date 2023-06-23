import { RouteProp, useRoute } from '@react-navigation/native';

export const useGameController = () => {
  const { params } =
    useRoute<RouteProp<ReactNavigation.RootParamList, 'Game'>>();

  return {
    isAIFirst: params.isAIFirst,
  };
};
