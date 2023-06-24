import { Dispatch } from 'redux';

import { ResultItemModel } from '../../models';

export enum GameHistoryActions {
  ADD = '@history/add',
}

const actionAddGameHistoryItem = (historyItem: ResultItemModel) => ({
  type: GameHistoryActions.ADD,
  payload: { historyItem },
});

export const addGameHistoryItem =  (
  historyItem: ResultItemModel,
  dispatch: Dispatch,
) => {
  dispatch(actionAddGameHistoryItem(historyItem));
};
