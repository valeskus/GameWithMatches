import * as React from 'react';
import * as Redux from 'react-redux';

import { AddGameHistoryItem } from '../gameHistoryActions';

import { ResultItemModel } from 'src/models';

export const useAddGameHistory = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    (historyItem: ResultItemModel) => {
      AddGameHistoryItem(historyItem, dispatch);
    },
    [dispatch],
  );
};
