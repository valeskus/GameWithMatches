import * as Redux from 'redux';

import { OptionsActions } from './optionsAction';

import { OptionsModel } from 'src/models';

export interface OptionsStoreState {
  options: OptionsModel;
}

const initialState: OptionsStoreState = {
  options: {
    allMatches: 25,
    matchesPerMove: 3,
  },
};

export function optionsReducer(
  state = initialState,
  action: Redux.AnyAction,
) {
  switch (action.type) {
    case OptionsActions.SET: {
      const { options } = action.payload;

      return {
        options: {
          ...options,
        },
      };
    }

    default:
      return state;
  }
}
