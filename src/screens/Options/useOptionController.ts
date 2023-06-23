import { useCallback, useState } from 'react';

export const useOptionController = () => {
  const [amountsMatches, setAmountsMatches] = useState(25);
  const [oneMovesMatches, setOneMovesMatches] = useState(3);

  const onSubmit = useCallback(() => {
  }, [amountsMatches, oneMovesMatches]);

  return {
    setAmountsMatches,
    setOneMovesMatches,
    onSubmit,
  };

};
