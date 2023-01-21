import {LocalStorageKey} from '../constants';
import {NoteModel} from '../interfaces/models/note.models';
import {localStorage} from './local-storage';

export const addNote = async (note: NoteModel) => {
  try {
    const newNote = await localStorage.setItem(
      LocalStorageKey.notes,
      JSON.stringify(note),
    );
    return note;
  } catch (error) {
    return {error};
  }
};

export const getUserNotes = async () => {
  try {
    const notes = await localStorage.getItem(LocalStorageKey.notes);
    if (notes) {
      return notes;
    }
    return null;
  } catch (error) {
    return {error};
  }
};

export const deleteNote = async (noteId: string) => {
  try {
    const currentNotes = await getUserNotes();
    if (currentNotes) {
      const updatedNotes = JSON.parse(currentNotes)?.filter(
        note => note.id !== noteId,
      );
      const removedNote = await localStorage.setItem(
        LocalStorageKey.notes,
        JSON.stringify(updatedNotes),
      );
      return removedNote;
    }
  } catch (error) {
    return {error};
  }
};
