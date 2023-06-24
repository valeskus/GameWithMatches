import * as Redux from 'redux';

import { OptionsActions } from './optionsActions';

import { OptionsModel } from 'src/models';

export interface OptionsStoreState extends OptionsModel {
}

const initialState: OptionsStoreState = {
  allMatches: 25,
  matchesPerMove: 3,
};

export function optionsReducer(
  state = initialState,
  action: Redux.AnyAction,
): OptionsStoreState {
  switch (action.type) {
    case OptionsActions.SET: {
      const { options } = action.payload as { options: OptionsModel };

      return {
        ...options,
      };
    }

    default:
      return state;
  }
}
