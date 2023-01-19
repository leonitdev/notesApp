import AsyncStorage from '@react-native-async-storage/async-storage';
import {LocalStorageKey} from '../constants';

export const localStorage = {
  getItem: (key: LocalStorageKey) => {
    return AsyncStorage.getItem(key);
  },
  setItem: (key: LocalStorageKey, value: string) => {
    return AsyncStorage.setItem(key, value);
  },
  removeItem: (key: LocalStorageKey) => {
    return AsyncStorage.removeItem(key);
  },
};
