import { Dispatch } from 'redux';

import { OptionsModel } from '../../models';

export enum OptionsActions {
  SET = '@options/set',
}

const actionSetOptions = (options: OptionsModel) => ({
  type: OptionsActions.SET,
  payload: { options },
});

export const setOptions = (
  options: OptionsModel,
  dispatch: Dispatch,
) => {
  dispatch(actionSetOptions(options));
};
