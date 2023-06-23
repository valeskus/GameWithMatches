import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { gameHistoryReducer } from './gameHistory/gameHistoryReducer';

const rootReducer = combineReducers({
  gameHistory: gameHistoryReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;

export const store = configureStore({ reducer: rootReducer });
