import * as React from 'react';
import * as Redux from 'react-redux';

import { setOptions } from '../optionsActions';
import { OptionsModel } from '../../../models';

export const useSetOptions = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    (options: OptionsModel) => {
      setOptions(options, dispatch);
    },
    [dispatch],
  );
};
