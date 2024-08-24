import { getValueFromSecureStorage } from "./getFromSecureStorage";
import { getUserTokenAndRetreiveUserInfo } from "./tokens/userAuthTokens";

export const checkUserSignInStatusAndNavigate = (dispatch: any, navigation: any) => {
  getUserTokenAndRetreiveUserInfo(dispatch, navigation) 
    getValueFromSecureStorage("signedInStatus").then((userIsLoggedIn) => {
      console.log(userIsLoggedIn, "Omorororor")
      if (userIsLoggedIn === null || userIsLoggedIn === "false") {
        navigation.navigate("Home" as never);
      }else{
        navigation.navigate("Home" as never);

      }
      return;
    });
  };
  