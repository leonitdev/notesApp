import {createSlice} from '@reduxjs/toolkit';

interface LayoutState {
  value: string;
}

const initialState: LayoutState = {
  value: 'column',
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setGrid: state => {
      state.value = 'grid';
    },
    setColumn: state => {
      state.value = 'column';
    },
  },
});

export const {setGrid, setColumn} = layoutSlice.actions;

export default layoutSlice.reducer;
