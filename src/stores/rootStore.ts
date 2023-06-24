import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { gameHistoryReducer } from './gameHistory/gameHistoryReducer';
import { optionsReducer } from './options/optionsReducer';

const rootReducer = combineReducers({
  gameHistory: gameHistoryReducer,
  options: optionsReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;

export const store = configureStore({ reducer: rootReducer });
