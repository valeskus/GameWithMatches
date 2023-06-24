import { useCallback, useState } from 'react';

export interface UseInputPadControllerParams {
  onPlayerMove: (count: number) => void;
  allMatchesCount: number;
  availableMatchesPerMove: number;
}

export const useInputPadController = ({
  availableMatchesPerMove,
  allMatchesCount,
  onPlayerMove,
}: UseInputPadControllerParams) => {
  const [isCountInvalid, setIsCountInvalid] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  const validate = useCallback(() => {
    if (!count || count > availableMatchesPerMove || count > allMatchesCount) {
      setIsCountInvalid(true);
    } else {
      setIsCountInvalid(false);
    }
  }, [count, availableMatchesPerMove, allMatchesCount]);

  const onSubmit = useCallback(() => {
    if (isCountInvalid) {
      return;
    }

    onPlayerMove(count);
  }, [count, isCountInvalid, onPlayerMove]);

  const onValueChange = (value: string) => {
    setCount(+value);
  };

  return {
    isCountInvalid,
    onSubmit,
    onValueChange,
    validate,
    count,
  };

};
