import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {NoteModel} from '../../interfaces/models/note.models';
import {createNote, getUserNotes} from '../../services/notes.service';

export const createNoteThunk = createAsyncThunk(
  'note/create',
  async ({id, title, description, tag, createdAt, userId}: NoteModel) => {
    const res = await createNote({
      id,
      title,
      description,
      tag,
      createdAt,
      userId,
    });
    return res as NoteModel;
  },
);

export const getNotesThunk = createAsyncThunk(
  'notes/get',
  async (userId: string) => {
    const res: NoteModel[] = await getUserNotes(userId);
    return res;
  },
);

interface InitialStateType {
  notes: NoteModel[];
  loading: boolean;
  error: boolean;
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {notes: [], loading: false, error: false} as InitialStateType,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(createNoteThunk.pending, state => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(createNoteThunk.fulfilled, (state, action) => {
      state.notes.push(action.payload);
      state.loading = false;
    });
    builder.addCase(createNoteThunk.rejected, state => {
      state.loading = false;
      state.error = true;
    });

    // ----//
    builder.addCase(getNotesThunk.pending, state => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getNotesThunk.fulfilled, (state, action) => {
      state.notes = action.payload;
      state.loading = false;
    });
    builder.addCase(getNotesThunk.rejected, state => {
      state.loading = false;
      state.error = true;
    });
  },
});

const {reducer} = notesSlice;
export default reducer;
