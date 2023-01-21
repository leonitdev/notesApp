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

export const usersSlice = createSlice({
  name: 'users',
  initialState: {user: {}, loading: false, error: false},
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
  //   extraReducers: builder => {
  //     // convert to builders
  //     builder.addCase(registerUserThunk.fulfilled, (state,action: UserModel) => {
  //         state.loading = true
  //       })

  //     // [registerUserThunk.fulfilled.toString()]: (state, action: UserModel) => {
  //     //   state.user = action;
  //     //   state.loading = false;
  //     // },
  //     // [registerUserThunk.pending.toString()]: state => {
  //     //   state.loading = true;
  //     // },
  //     [registerUserThunk.rejected.toString()]: state => {
  //       state.loading = false;
  //       state.error = true;
  //     },

  //     // getUsersThunk
  //     [getUserThunk.fulfilled.toString()]: (state, action: UserModel) => {
  //       state.user = action;
  //       state.loading = false;
  //     },

  //     [getUserThunk.pending.toString()]: state => {
  //       state.loading = true;
  //       state.error = false;
  //     },

  //     [getUserThunk.rejected.toString()]: state => {
  //       state.loading = false;
  //       state.error = true;
  //     },
  //   },
});

// Action creators
const {reducer} = usersSlice;
export default reducer;
