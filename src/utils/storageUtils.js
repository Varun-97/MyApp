import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const setUserPref = (key, value) => {
  try {
    storage.set(key, value);
  } catch (e) {
    console.log('error=>', e);
  }
};

export const getUserPref = (key, defaultValue = '') => {
  try {
    const value = storage.getString(key);
    if (!value) {
      return defaultValue;
    }
    return value;
  } catch (e) {
    console.log('error=>', e);
  }
};

// export default {
//   setUserPref,
//   getUserPref,
// };
