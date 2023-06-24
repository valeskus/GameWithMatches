import * as Redux from 'react-redux';

import { OptionsStoreState } from '../optionsReducer';
import { RootStore } from '../../rootStore';

export const useOptionsStore = () => {
  return Redux.useSelector<RootStore, OptionsStoreState>(
    store => store.options,
  );
};
