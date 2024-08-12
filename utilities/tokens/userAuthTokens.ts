import JWT from "expo-jwt";
import { getValueFromSecureStorage } from "../getFromSecureStorage";
import { retrieveAndReduxStoreUserInfo } from "../userHttpRequests/userGetRequests";
import { navigateToLoginScreen } from "../userTasks";
import { saveToSecureStorage } from "../saveToSecureStorage";
import { showMessage } from "react-native-flash-message";

export  const  getUserTokenAndRetreiveUserInfo: Function = (dispatch: any, navigation: any) => {
    getValueFromSecureStorage("userToken").then((token) => {
      try{
        const userId = JWT.decode(token!, process.env.EXPO_PUBLIC_JWT_KEY!).sub;
        retrieveAndReduxStoreUserInfo(userId!, dispatch);
  
      }catch(error){
        saveToSecureStorage("signedInStatus", "false")
        return
       
      }
      
    });
  };

export const  decodeUserJwtToken = (token: string)=>{
   
        const userId = JWT.decode(token, process.env.EXPO_PUBLIC_JWT_KEY!).sub;
        return userId

}

export const storeUserTokenAndLoggedInStatus = (data: string) => {
    saveToSecureStorage("userToken", data);
    saveToSecureStorage("signedInStatus", "true");
    showMessage({ message: "Success" });
  };
  
  
  