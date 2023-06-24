import * as GameHistoryStore from '@stores/gameHistory';

export const useHistoryController = () => {
  const gameHistory = GameHistoryStore.useGameHistoryStore();

  return {
    history: gameHistory.history,
  };
};
