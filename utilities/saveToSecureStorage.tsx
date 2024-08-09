import * as SecureStore from 'expo-secure-store';

export async function saveToSecureStorage(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}