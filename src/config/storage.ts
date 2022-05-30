
import AsyncStorage from "@react-native-async-storage/async-storage";

const LOCAL_STORAGE_KEYS = {
TOKEN:'token',
APP_INTRO: 'appIntro',
};

/**
 * Store local data based on key
 * @param key
 * @param value value to be stored
 */
const storeLocalData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log("Error saving data" + error);
  }
};

/**
 * Get local data based on key
 * @param key
 */
const getLocalData = async (key: string) => {
  try {
    let item = await AsyncStorage.getItem(key);
    if (item !== null) {
      return item
    }

  } catch (error) {
    console.log("Error getting data" + error);
  }
}

/**
 * Clear all local data
 */
const clearAllLocalData = () => {
  AsyncStorage.clear();
};

/**
 * Clear local data based on key
 * @param key
 */
const clearLocalData = (key: string) => {
  AsyncStorage.removeItem(key);
};

export {
  storeLocalData,
  getLocalData,
  clearAllLocalData,
  clearLocalData,
  LOCAL_STORAGE_KEYS,
};
