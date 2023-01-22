import {LocalStorageKey} from '../constants';
import {NoteModel} from '../interfaces/models/note.models';
import {localStorage} from './local-storage';

export const createNote = async (note: NoteModel) => {
  let currentNotes = await localStorage.getItem(LocalStorageKey.notes);
  let updatedNotes = [];
  if (currentNotes) {
    updatedNotes = [...JSON.parse(currentNotes), note];
    await localStorage.setItem(
      LocalStorageKey.notes,
      JSON.stringify(updatedNotes),
    );
    return updatedNotes;
  }

  updatedNotes.push(note);
  await localStorage.setItem(
    LocalStorageKey.notes,
    JSON.stringify(updatedNotes),
  );
  return updatedNotes;
};

export const getUserNotes = async (userId: string) => {
  const notes = await localStorage.getItem(LocalStorageKey.notes);
  if (notes) {
    return JSON.parse(notes).filter(
      (note: NoteModel) => note.userId === userId,
    );
  }
  return [];
};

export const deleteNote = async (noteId: string) => {
  const notes = await localStorage.getItem(LocalStorageKey.notes);
  if (notes) {
    const updatedNotes = JSON.parse(notes).filter(
      (note: NoteModel) => note.id !== noteId,
    );
    localStorage.setItem(LocalStorageKey.notes, JSON.stringify(updatedNotes));
    return updatedNotes;
  }
  return [];
};
