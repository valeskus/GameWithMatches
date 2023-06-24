import { useCallback, useEffect, useState } from 'react';

export const useGamePadController = (allMatchesCount: number, matchesPerMove: number,
  onPlayerMove: (count: number) => void,
) => {
  const [isDisabledFirst, setIsDisabledFirst] = useState<boolean>(false);
  const [isDisabledSecond, setIsDisabledFSecond] = useState<boolean>(false);
  const [isDisabledThird, setIsDisabledThird] = useState<boolean>(false);
  const [isCountInvalid, setIsCountInvalid] = useState<boolean>(false);

  const [count, setCount] = useState<number>(0);

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

  const onSubmit = useCallback(() => {
    if (!count || count > matchesPerMove || count > allMatchesCount) {
      return setIsCountInvalid(true);
    }

    onPlayerMove(count);
  }, [count]);

  return {
    isDisabledFirst,
    isDisabledSecond,
    isDisabledThird,
    isCountInvalid,
    onSubmit,
    setCount,
    count,
  };

};
