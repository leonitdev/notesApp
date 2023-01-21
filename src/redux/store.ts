import {configureStore} from '@reduxjs/toolkit';
import usersReducer from './slices/users';

const reducer = {
  users: usersReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
