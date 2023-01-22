import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {TagModel} from '../../interfaces/models/tag.models';
import {createTag, deleteTag, getTags} from '../../services/tag.service';

export const createTagThunk = createAsyncThunk(
  'tag/create',
  async ({id, name}: TagModel) => {
    const res = await createTag({
      id,
      name,
    });
    return res as TagModel[];
  },
);

export const getTagsThunk = createAsyncThunk('tags/get', async () => {
  const res: TagModel[] = await getTags();
  return res;
});

export const deleteTagThunk = createAsyncThunk(
  'tag/delete',
  async (tagId: string) => {
    const res: TagModel[] = await deleteTag(tagId);
    return res;
  },
);

interface InitialStateType {
  tags: TagModel[];
  loading: boolean;
  error: boolean;
}

export const tagsSlice = createSlice({
  name: 'tags',
  initialState: {tags: [], loading: false, error: false} as InitialStateType,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(createTagThunk.pending, state => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(createTagThunk.fulfilled, (state, action) => {
      state.tags = action.payload;
      state.loading = false;
    });
    builder.addCase(createTagThunk.rejected, state => {
      state.loading = false;
      state.error = true;
    });

    // ----//
    builder.addCase(getTagsThunk.pending, state => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getTagsThunk.fulfilled, (state, action) => {
      state.tags = action.payload;
      state.loading = false;
    });
    builder.addCase(getTagsThunk.rejected, state => {
      state.loading = false;
      state.error = true;
    });

    // ----//
    builder.addCase(deleteTagThunk.pending, state => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(deleteTagThunk.fulfilled, (state, action) => {
      state.tags = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteTagThunk.rejected, state => {
      state.loading = false;
      state.error = true;
    });
  },
});

const {reducer} = tagsSlice;
export default reducer;
