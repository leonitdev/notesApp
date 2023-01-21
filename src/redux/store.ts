import {configureStore} from '@reduxjs/toolkit';
import usersReducer from './slices/users';
import type {} from 'redux-thunk/extend-redux';

const reducer = {
  users: usersReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
