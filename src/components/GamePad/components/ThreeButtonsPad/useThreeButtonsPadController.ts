import { useMemo } from 'react';

export interface UseThreeButtonsPadControllerParams {
  onPlayerMove: (count: number) => void;
  availableMatchesPerMove: number;
}

interface ButtonItem {
  title: string;
  onPress: () => void;
  isDisabled: boolean;
}

export const useThreeButtonsPadController = ({
  availableMatchesPerMove,
  onPlayerMove,
}: UseThreeButtonsPadControllerParams) => {
  const buttonsList = useMemo(() => {
    return [
      {
        title: '1',
        onPress: () => onPlayerMove(1),
        isDisabled: availableMatchesPerMove === 0,
      },
      availableMatchesPerMove > 1 && {
        title: '2',
        onPress: () => onPlayerMove(2),
        isDisabled: availableMatchesPerMove === 1,
      },
      availableMatchesPerMove > 2 && {
        title: '3',
        onPress: () => onPlayerMove(3),
        isDisabled: availableMatchesPerMove === 2,
      },
    ].filter(Boolean) as Array<ButtonItem>;
  }, [availableMatchesPerMove]);

  return {
    buttonsList,
  };
};
