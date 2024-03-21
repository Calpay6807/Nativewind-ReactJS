import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export function getİtem<T>(key: string): T {
  const value = storage.getString(key);
  return value ? JSON.parse(value) || null : null;
}

export function setİtem<T>(key: string, value: T) {
  storage.set(key, JSON.stringify(value));
}

export function removeİtem(key: string) {
  storage.delete(key);
}
