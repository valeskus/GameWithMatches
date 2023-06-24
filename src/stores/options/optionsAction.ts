import { Dispatch } from 'redux';

import { OptionsModel } from 'src/models';

export enum OptionsActions {
  SET = '@options/set',
}

const actionSetOptions = (payload: OptionsModel) => ({
  type: OptionsActions.SET,
  payload: { options: payload },
});

export const setOptions = (options: OptionsModel,
  dispatch: Dispatch,
) => {
  dispatch(actionSetOptions(options));
};
