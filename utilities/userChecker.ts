import { getValueFromSecureStorage } from "./getFromSecureStorage";
import { getUserTokenAndRetreiveUserInfo } from "./tokens/userAuthTokens";

export const checkUserSignInStatusAndNavigate = (dispatch: any, navigation: any) => {
  getUserTokenAndRetreiveUserInfo(dispatch, navigation)
    getValueFromSecureStorage("signedInStatus").then((userIsLoggedIn) => {
      if (userIsLoggedIn === null || userIsLoggedIn === "false") {
        navigation.navigate("Login" as never);
      }else{
        navigation.navigate("Home" as never);

      }
      return;
    });
  };
  