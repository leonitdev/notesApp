import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {UserModel} from '../../interfaces/models/user.models';
import {registerUser, getUser} from '../../services/user.service';

export const registerUserThunk = createAsyncThunk(
  'users/register',
  async ({id, username, hobby}: UserModel) => {
    const res = await registerUser({id, username, hobby});
    return res as UserModel;
  },
);

export const getUserThunk = createAsyncThunk('users/get', async () => {
  const res: UserModel = await getUser();
  return res;
});

interface InitialStateType {
  user: UserModel;
  loading: boolean;
  error: boolean;
}

export const usersSlice = createSlice({
  name: 'users',
  initialState: {user: {}, loading: false, error: false} as InitialStateType,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(registerUserThunk.pending, state => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(registerUserThunk.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(registerUserThunk.rejected, state => {
      state.loading = false;
      state.error = true;
    });

    // ----//
    builder.addCase(getUserThunk.pending, state => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getUserThunk.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(getUserThunk.rejected, state => {
      state.loading = false;
      state.error = true;
    });
  },
});

const {reducer} = usersSlice;
export default reducer;
