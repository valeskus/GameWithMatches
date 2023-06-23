import * as Redux from 'redux';

import { GameHistoryActions } from './gameHistoryActions';

import { HistoryItemModel } from 'src/models';

export interface GameHistoryStoreState {
  history: Array<HistoryItemModel>;
}

const initialState: GameHistoryStoreState = {
  history: [],
};

export function gameHistoryReducer(
  state = initialState,
  action: Redux.AnyAction,
) {
  switch (action.type) {
    case GameHistoryActions.ADD: {
      const { historyItem } = action.payload;

      return {
        history: [...state.history, historyItem],

      };
    }

    default:
      return state;
  }
}
