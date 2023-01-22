import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {NoteModel} from '../../interfaces/models/note.models';
import {
  createNote,
  deleteNote,
  filterNotesByTag,
  getUserNotes,
  getUserNotesBySearch,
} from '../../services/notes.service';

interface getNotesBySearchParamsType {
  userId: string;
  searchText: string;
}

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
    return res as NoteModel[];
  },
);

export const getNotesThunk = createAsyncThunk(
  'notes/get',
  async (userId: string) => {
    const res: NoteModel[] = await getUserNotes(userId);
    return res;
  },
);

interface FilterNotesByTagParamType {
  userId: string;
  tagName: string;
}
export const filterNotesByTagThunk = createAsyncThunk(
  'notes/filter/get',
  async ({userId, tagName}: FilterNotesByTagParamType) => {
    const res: NoteModel[] = await filterNotesByTag(userId, tagName);
    console.log('res: ', res);
    return res;
  },
);

export const getNotesBySearchThunk = createAsyncThunk(
  'notes/search/get',
  async ({userId, searchText}: getNotesBySearchParamsType) => {
    const res: NoteModel[] = await getUserNotesBySearch(userId, searchText);
    return res;
  },
);

export const deleteNotesThunk = createAsyncThunk(
  'notes/delete',
  async (noteId: string) => {
    const res: NoteModel[] = await deleteNote(noteId);
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
      state.notes = action.payload;
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

    // ----//
    builder.addCase(getNotesBySearchThunk.pending, state => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getNotesBySearchThunk.fulfilled, (state, action) => {
      state.notes = action.payload;
      state.loading = false;
    });
    builder.addCase(getNotesBySearchThunk.rejected, state => {
      state.loading = false;
      state.error = true;
    });

    // ----//
    builder.addCase(filterNotesByTagThunk.pending, state => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(filterNotesByTagThunk.fulfilled, (state, action) => {
      state.notes = action.payload;
      state.loading = false;
    });
    builder.addCase(filterNotesByTagThunk.rejected, state => {
      state.loading = false;
      state.error = true;
    });

    // ----//
    builder.addCase(deleteNotesThunk.pending, state => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(deleteNotesThunk.fulfilled, (state, action) => {
      state.notes = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteNotesThunk.rejected, state => {
      state.loading = false;
      state.error = true;
    });
  },
});

const {reducer} = notesSlice;
export default reducer;
