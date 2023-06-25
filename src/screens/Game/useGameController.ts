import { CommonActions, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';

import * as GameHistoryStore from '@stores/gameHistory';
import * as OptionsStore from '@stores/options';

import { AI } from '../../AI';

const ai = new AI();

export const useGameController = () => {
  const {
    params,
  } = useRoute<RouteProp<ReactNavigation.RootParamList, 'Game'>>();

  const options = OptionsStore.useOptionsStore();

  const [matchesLeft, setMatchesLeft] = useState<number>(options.allMatches);

  const [AILastMove, setAILastMove] = useState<number>(0);
  const [playerLastMove, setPlayerLastMove] = useState<number>(0);

  const [isAIMove, setIsAIMove] = useState<boolean>(params.isAIFirst);

  const [playerScore, setPlayerScore] = useState<number>(0);
  const [AIScore, setAIScore] = useState<number>(0);

  const navigation = useNavigation();
  const addGameHistory = GameHistoryStore.useAddGameHistory();

  const decreaseMatches = useCallback((count: number, matchesCount: number) => {
    setMatchesLeft(matchesCount - count);

    return matchesCount - count;
  }, []);

  const onAIMove = useCallback(async (matchesCount: number) => {
    setIsAIMove(true);

    const move = await ai.pick({
      matchesLeft: matchesCount,
      allMatches: options.allMatches,
      aiNumberOfMatches: AIScore,
      pickLimit: options.matchesPerMove,
    });

    setAILastMove(move);
    setAIScore(AIScore + 1);

    if (!decreaseMatches(1, matchesCount)) {
      return;
    }

    setIsAIMove(false);
  }, [AIScore]);

  const onPlayerMove = useCallback((count: number) => {
    if (!matchesLeft) {
      return;
    }

    setPlayerLastMove(count);
    setPlayerScore(playerScore + count);

    const updateMatchesCount = decreaseMatches(count, matchesLeft);

    if (updateMatchesCount) {
      onAIMove(updateMatchesCount);
    }
  }, [playerScore, matchesLeft]);

  const goToResult = useCallback(() => {
    const winner = AIScore % 2 === 0 ? 'AI' : 'Player';

    addGameHistory({
      winner,
      AIScore,
      playerScore,
    });

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'Result',
          },
        ],
      }),
    );
  }, [AIScore, playerScore]);

  useEffect(() => {
    if (params.isAIFirst) {
      onAIMove(matchesLeft);
    }
  }, []);

  useEffect(() => {
    if (!matchesLeft) {
      goToResult();
    }
  }, [matchesLeft]);

  return {
    isAIFirst: params.isAIFirst,
    onPlayerMove,
    isAIMove,
    AILastMove,
    playerLastMove,
    playerScore,
    matchesLeft,
    availableMatchesPerMove: matchesLeft > options.matchesPerMove ? options.matchesPerMove : matchesLeft,
  };
};
