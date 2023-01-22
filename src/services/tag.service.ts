import {LocalStorageKey} from '../constants';
import {NoteModel} from '../interfaces/models/note.models';
import {TagModel} from '../interfaces/models/tag.models';
import {localStorage} from './local-storage';

export const createTag = async (tag: TagModel) => {
  let currentTags = await localStorage.getItem(LocalStorageKey.tags);
  let updatedTags = [];
  if (currentTags) {
    updatedTags = [...JSON.parse(currentTags), tag];
    await localStorage.setItem(
      LocalStorageKey.tags,
      JSON.stringify(updatedTags),
    );
    return updatedTags;
  }

  updatedTags.push(tag);
  await localStorage.setItem(LocalStorageKey.tags, JSON.stringify(updatedTags));
  return updatedTags;
};

export const getTags = async () => {
  const tags = await localStorage.getItem(LocalStorageKey.tags);
  if (tags) {
    return JSON.parse(tags);
  }
  return [];
};

export const deleteTag = async (tagId: string) => {
  const tags = await localStorage.getItem(LocalStorageKey.tags);
  if (tags) {
    const updatedTags = JSON.parse(tags).filter(
      (tag: TagModel) => tag.id !== tagId,
    );
    localStorage.setItem(LocalStorageKey.tags, JSON.stringify(updatedTags));
    return updatedTags;
  }
  return [];
};
