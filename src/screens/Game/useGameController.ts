import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';

import * as GameHistoryStore from '@stores/gameHistory';
import * as OptionsStore from '@stores/options';

import { ResultItemModel } from 'src/models';

export const useGameController = () => {
  const { options } = OptionsStore.useOptionsStore();
  const [aiMove, setAiMove] = useState<number>(0);
  const [playerMove, setPlayerMove] = useState<number>(0);
  const [isAIMove, setIsAIMove] = useState<boolean>(false);
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [AIScore, setAIScore] = useState<number>(0);
  const [allMatches, setAllMatches] = useState<number>(options.allMatches);

  const { params } =
    useRoute<RouteProp<ReactNavigation.RootParamList, 'Game'>>();

  const navigation = useNavigation();
  const addGameHistory = GameHistoryStore.useAddGameHistory();

  const calcMatches = useCallback((count: number, matchesCount: number) => {
    setAllMatches(matchesCount - count);

    return matchesCount - count;
  }, [setAllMatches]);

  const onAIMove = useCallback((matchesCount: number) => {
    if (matchesCount === 0) {
      return;
    }

    setAiMove(1);
    calcMatches(1, matchesCount);
    setAIScore(AIScore + 1);

    if (matchesCount === 1) {
      return;
    }

    return setIsAIMove(false);
  }, [setPlayerMove, AIScore, setAIScore]);

  useEffect(() => {
    if (params.isAIFirst) {
      setIsAIMove(true);
      onAIMove(allMatches);
    }

    setIsAIMove(false);

    return;
  }, [params]);

  const onPlayerMove = useCallback((count: number) => {
    if (allMatches === 0) {
      return;
    }

    setPlayerMove(count);
    setPlayerScore(playerScore + count);
    const updateMatchesCount = calcMatches(count, allMatches);

    setIsAIMove(true);

    onAIMove(updateMatchesCount);

  }, [setPlayerMove, playerScore, setPlayerScore, allMatches]);

  const goToResult = useCallback(() => {
    const winner = AIScore % 2 === 0 ? 'AI' : 'Player';

    const result: ResultItemModel = {
      winner,
      AIScore,
      playerScore,
    };
    addGameHistory(result);
    setAllMatches(options.allMatches);
    setPlayerScore(0);
    setAIScore(0);
    setPlayerMove(0);
    setAiMove(0);
    navigation.navigate('Result', { ...result, isAIFirst: params.isAIFirst });
  }, [AIScore, playerScore]);

  return {
    isAIFirst: params.isAIFirst,
    goToResult,
    onPlayerMove,
    isAIMove,
    aiMove,
    playerMove,
    playerScore,
    allMatches,
    matchesPerMove: options.matchesPerMove,
  };
};
