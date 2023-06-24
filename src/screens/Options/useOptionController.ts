import { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import * as OptionsStore from '@stores/options';

export const useOptionController = () => {
  const setOptions = OptionsStore.useSetOptions();
  const options = OptionsStore.useOptionsStore();

  const [allMatches, setAllMatches] = useState(options.allMatches);
  const [allMatchesInputErrorMessage, setAllMatchesInputErrorMessage] = useState('');

  const [matchesPerMove, setMatchesPerMove] = useState(options.matchesPerMove);
  const [matchesPerMoveInputErrorMessage, setMatchesPerMoveInputErrorMessage] = useState('');

  const navigation = useNavigation();

  const validateAllMatchesInput = useCallback(() => {
    if (allMatches % 2 === 0) {
      setAllMatchesInputErrorMessage('The number of matches for the pile must be an odd number !');
    }
  }, [allMatches]);

  const validateMatchesPerMoveInput = useCallback(() => {
    if (matchesPerMove < 1) {
      setMatchesPerMoveInputErrorMessage('The number of matches for the pile must be an odd number !');
    }
  }, [matchesPerMove]);

  const onChangeAllMatches = useCallback((value: string) => {
    setAllMatchesInputErrorMessage('');

    setAllMatches(+value);
  }, []);

  const onChangeMatchesPerMove = useCallback((value: string) => {
    setMatchesPerMoveInputErrorMessage('');

    setMatchesPerMove(+value);
  }, []);

  const isApplyDisabled = !!allMatchesInputErrorMessage || !!matchesPerMoveInputErrorMessage;

  const onApply = useCallback(() => {
    if (isApplyDisabled) {
      return;
    }

    setOptions({ allMatches, matchesPerMove });

    navigation.navigate('Home');
  }, [isApplyDisabled, allMatches, matchesPerMove, setOptions]);

  return {
    allMatchesInputErrorMessage,
    matchesPerMoveInputErrorMessage,
    validateAllMatchesInput,
    validateMatchesPerMoveInput,
    onChangeAllMatches,
    onChangeMatchesPerMove,
    onApply,
    matchesPerMove,
    allMatches,
    isApplyDisabled,
  };

};
