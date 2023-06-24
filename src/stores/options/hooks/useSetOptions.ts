import * as React from 'react';
import * as Redux from 'react-redux';

import { setOptions } from '../optionsAction';

import { OptionsModel } from 'src/models';

export const useSetOptions = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    (options: OptionsModel) => {
      setOptions(options, dispatch);
    },
    [dispatch],
  );
};
