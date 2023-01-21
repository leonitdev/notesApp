import {LocalStorageKey} from '../constants';
import {UserModel} from '../interfaces/models/user.models';
import {localStorage} from './local-storage';

export const registerUser = async (user: UserModel) => {
  try {
    await localStorage.setItem(LocalStorageKey.user, JSON.stringify(user));
    return user;
  } catch (error) {
    return {error};
  }
};

export const getUser = async () => {
  try {
    const user = await localStorage.getItem(LocalStorageKey.user);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  } catch (error) {
    return {error};
  }
};
