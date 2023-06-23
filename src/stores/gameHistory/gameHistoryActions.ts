import { Dispatch } from 'redux';

import { HistoryItemModel } from 'src/models';

export enum GameHistoryActions {
  ADD = '@recipes/add',
}

const actionSetGameHistoryItem = (payload: HistoryItemModel) => ({
  type: GameHistoryActions.ADD,
  payload: { historyItem: payload },
});

export const SetGameHistoryItem =  (historyItem: HistoryItemModel,
  dispatch: Dispatch,
) => {
  dispatch(actionSetGameHistoryItem(historyItem));
};
