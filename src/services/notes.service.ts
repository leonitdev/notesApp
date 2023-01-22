import {LocalStorageKey} from '../constants';
import {NoteModel} from '../interfaces/models/note.models';
import {localStorage} from './local-storage';

export const createNote = async (note: NoteModel) => {
  await localStorage.setItem(LocalStorageKey.notes, JSON.stringify(note));
  return note;
};

export const getUserNotes = async (userId: string) => {
  const notes = await localStorage.getItem(LocalStorageKey.notes);
  if (notes) {
    return JSON.parse(notes).filter(note => note.userId === userId);
  }

  return [];
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
