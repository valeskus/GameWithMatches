
import { useCallback, useState } from 'react';

import * as OptionsStore from '@stores/options';

export const useOptionController = () => {
  const [allMatches, setAllMatches] = useState(25);
  const [matchesPerMove, setMatchesPerMove] = useState(3);

  const setOptions = OptionsStore.useSetOptions();
  const onSubmit = useCallback(() => {
    setOptions({ allMatches, matchesPerMove });
  }, [allMatches, matchesPerMove]);

  return {
    setAllMatches,
    setMatchesPerMove,
    onSubmit,
  };

};
