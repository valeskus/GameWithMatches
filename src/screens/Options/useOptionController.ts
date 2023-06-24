
import { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import * as OptionsStore from '@stores/options';

export const useOptionController = () => {
  const [allMatches, setAllMatches] = useState(25);
  const [matchesPerMove, setMatchesPerMove] = useState(3);
  const [invalidAllMatches, setInvalidAllMatches] = useState<boolean>(false);
  const [invalidPerMove, setInvalidPerMove] = useState<boolean>(false);

  const navigation = useNavigation();
  const setOptions = OptionsStore.useSetOptions();

  const checkMatchesInput = useCallback(() => {
    if (allMatches % 2 === 0) {
      setInvalidAllMatches(true);

      return false;
    }

    if (matchesPerMove < 1) {
      setInvalidPerMove(true);

      return false;

    }

    return true;
  }, [allMatches, matchesPerMove]);

  const onSubmit = useCallback(() => {
    const valid = checkMatchesInput();
    if (!valid) {
      return;
    }

    setOptions({ allMatches, matchesPerMove });
    navigation.navigate('Home');
  }, [allMatches, matchesPerMove, checkMatchesInput]);

  return {
    setAllMatches,
    setMatchesPerMove,
    onSubmit,
    invalidAllMatches,
    invalidPerMove,
    matchesPerMove,
    allMatches,
  };

};
