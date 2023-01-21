import {createSlice} from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {value: 0},
  reducers: {
    // add your non-async reducers here
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    // add your async reducers here
  },
});

// Action creators
const {reducer} = usersSlice;
export default reducer;
// export const {increment, decrement, incrementByAmount} = usersSlice.actions;
