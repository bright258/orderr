import * as SecureStore from 'expo-secure-store';


export async function getValueFromSecureStorage(key: string): Promise<string | null>  {
    const result = await SecureStore.getItemAsync(key);

    if (result) {
      return result
    } else{
        return null
    }
  }