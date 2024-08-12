import { showMessage } from "react-native-flash-message";
import { apiFetcherForSignUpAndSignIn } from "../httpRequests/fetchPostAuthApi";
import { LoginPayload, UserSignUpPayload } from "../userConstants";
import { navigateToLoginScreen, navigateToWelcome,  } from "../userTasks";
import {storeUserTokenAndLoggedInStatus} from "../tokens/userAuthTokens"

export const signInUserWithBackendAuthApi = (
    payload: LoginPayload,
    navigation: any
  ) => {
    apiFetcherForSignUpAndSignIn(payload, "login")
      .then((data) => {
        storeUserTokenAndLoggedInStatus(data.access_token);  
          navigateToWelcome(navigation);
      })
      .catch((error) => {
        showMessage({ message: "error" + error.message });
      });
  };

export const signUpUserWithBackendAuthApi = (
    payload: UserSignUpPayload,
    navigation: any
  ) => {
    apiFetcherForSignUpAndSignIn(payload, "sign-up")
      .then(() => {
        showMessage({ message: "Success" });
       
          navigateToLoginScreen(navigation);
      
      })
      .catch((error) => {
        showMessage({ message: "error " + error });
      });
  };