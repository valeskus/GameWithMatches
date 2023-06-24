import * as React from 'react';
import * as Redux from 'react-redux';

import { addGameHistoryItem } from '../gameHistoryActions';
import { ResultItemModel } from '../../../models';

export const useAddGameHistory = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    (historyItem: ResultItemModel) => {
      addGameHistoryItem(historyItem, dispatch);
    },
    [dispatch],
  );
};
