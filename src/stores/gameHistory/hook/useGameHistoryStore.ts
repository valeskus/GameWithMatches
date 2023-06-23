import * as Redux from 'react-redux';

import { GameHistoryStoreState } from '../gameHistoryReducer';
import { RootStore } from '../../rootStore';

export const useGameHistoryStore = () => {
  return Redux.useSelector<RootStore, GameHistoryStoreState>(
    store => store.gameHistory,
  );
};
