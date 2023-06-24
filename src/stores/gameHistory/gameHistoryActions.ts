import { Dispatch } from 'redux';

import { ResultItemModel } from 'src/models';

export enum GameHistoryActions {
  ADD = '@history/add',
}

const actionAddGameHistoryItem = (payload: ResultItemModel) => ({
  type: GameHistoryActions.ADD,
  payload: { historyItem: payload },
});

export const AddGameHistoryItem =  (historyItem: ResultItemModel,
  dispatch: Dispatch,
) => {
  dispatch(actionAddGameHistoryItem(historyItem));
};
