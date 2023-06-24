
import { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import * as OptionsStore from '@stores/options';

export const useOptionController = () => {
  const [allMatches, setAllMatches] = useState(25);
  const [matchesPerMove, setMatchesPerMove] = useState(3);

  const navigation = useNavigation();
  const setOptions = OptionsStore.useSetOptions();

  const onSubmit = useCallback(() => {
    setOptions({ allMatches, matchesPerMove });
    navigation.navigate('Home');
  }, [allMatches, matchesPerMove]);

  return {
    setAllMatches,
    setMatchesPerMove,
    onSubmit,
  };

};
