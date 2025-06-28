import AsyncStorage from '@react-native-async-storage/async-storage';
import { LASTLOCATION } from '../../constants';

export async function getStorageCity() {
  const storage = await AsyncStorage.getItem(LASTLOCATION);
  return storage;
}

export async function saveStorageCity(city:string) {
      await AsyncStorage.setItem(LASTLOCATION, city);

}

export async function removeStorageCity() {
  await AsyncStorage.removeItem(LASTLOCATION);
}