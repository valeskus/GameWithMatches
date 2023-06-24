import { useCallback, useEffect, useState } from 'react';

export const useGamePadController = (allMatchesCount: number) => {
  const [isDisabledFirst, setIsDisabledFirst] = useState<boolean>(false);
  const [isDisabledSecond, setIsDisabledFSecond] = useState<boolean>(false);
  const [isDisabledThird, setIsDisabledThird] = useState<boolean>(false);

  const checkDisabled = useCallback(() => {
    switch (allMatchesCount) {
      case 0: {
        setIsDisabledFirst(true);
        setIsDisabledFSecond(true);
        setIsDisabledThird(true);

        return;
      }

      case 1: {
        setIsDisabledFSecond(true);
        setIsDisabledThird(true);

        return;
      }

      case 2: {
        setIsDisabledThird(true);

        return;
      }

      default: return false;
    }

  }, [allMatchesCount]);

  useEffect(() => {
    checkDisabled();
  }, [allMatchesCount]);

  return {
    isDisabledFirst,
    isDisabledSecond,
    isDisabledThird,
  };

};
