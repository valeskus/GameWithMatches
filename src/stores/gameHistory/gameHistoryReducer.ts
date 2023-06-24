import * as Redux from 'redux';

import { ResultItemModel } from '../../models';

import { GameHistoryActions } from './gameHistoryActions';

export interface GameHistoryStoreState {
  history: Array<ResultItemModel>;
}

const initialState: GameHistoryStoreState = {
  history: [],
};

export function gameHistoryReducer(
  state = initialState,
  action: Redux.AnyAction,
): GameHistoryStoreState {
  switch (action.type) {
    case GameHistoryActions.ADD: {
      const { historyItem } = action.payload as { historyItem: ResultItemModel };

      return {
        history: [...state.history, historyItem],
      };
    }

    default:
      return state;
  }
}
