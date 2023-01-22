import {configureStore} from '@reduxjs/toolkit';
import usersReducer from './slices/users';
import notesReducer from './slices/notes';
import tagsReducer from './slices/tags';

import type {} from 'redux-thunk/extend-redux';

const reducer = {
  users: usersReducer,
  notes: notesReducer,
  tags: tagsReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
