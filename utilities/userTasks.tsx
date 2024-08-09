import { getValueFromSecureStorage } from "../utilities/getFromSecureStorage";
import { BackHandler } from "react-native";
import { backAction } from "../utilities/backHandler";
import {
  FormValidationPayload,
  LoginPayload,
  UserSignUpPayload,
} from "./userConstants";
import { showMessage } from "react-native-flash-message";
import { saveToSecureStorage } from "./saveToSecureStorage";
import { setUserDetails } from "./reduxFile";

export const checkUserSignInStatusAndNavigate = (navigation: any) => {
  getValueFromSecureStorage("signedInStatus").then((userIsLoggedIn) => {
    if (userIsLoggedIn === null || userIsLoggedIn === "false") {
      navigation.navigate("SignUp" as never);
    }
    if (userIsLoggedIn === "true") {
      navigation.navigate("Home" as never);
    }
    return;
  });
};

export const preventUserFromGoingBackOnPressingBackButton = () => {
  BackHandler.addEventListener("hardwareBackPress", backAction);
};

export const signUpUserWithBackendAuthApi = (
  payload: UserSignUpPayload,
  navigation: any
) => {
  fetch(`${process.env.EXPO_PUBLIC_BACKEND_URL}/auth/sign-up`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "69420",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(() => {
      showMessage({ message: "Success" });
      setTimeout(() => {
        navigateToLoginScreen(navigation);
      }, 2000);
    })
    .catch((error) => {
      showMessage({ message: "error " + error });
    });
};

export const validateUserEntryIntoSignUpForm = (
  payload: FormValidationPayload
): void | true => {
  const error: string[] = [];
  if (!payload.fullName) {
    error.push("Full Name is Required \n");
  }

  if (!payload.password) {
    error.push("Password is Required  \n");
  } else if (payload.password.length < 6) {
    error.push("Password must be at least 6 characters. \n");
  }
  if (!payload.email) {
    error.push("Email is Required \n");
  } else if (!/\S+@\S+\.\S+/.test(payload.email)) {
    error.push("Email is invalid. \n");
  }
  if (payload.password != payload.confirmedPassword) {
    error.push("Password not matching \n");
  }

  if (error.length > 0) {
    showMessage({ message: error.toString() });

    return;
  } else {
    return true;
  }
};

export const navigateToLoginScreen = (navigation: any) => {
  navigation.navigate("Login" as never);
};

export const navigateToWelcome = (navigation: any) => {
  navigation.navigate("Welcome" as never);
};

export const navigateToSignUp = (navigation: any) => {
  navigation.navigate("SignUp" as never);
};

export const validateUserEntryIntoSignInForm = (payload: LoginPayload) => {
  const error: string[] = [];

  if (!payload.password) {
    error.push("Password is Required  \n");
  } else if (payload.password.length < 6) {
    error.push("Password must be at least 6 characters. \n");
  }
  if (!payload.email) {
    error.push("Email is Required \n");
  } else if (!/\S+@\S+\.\S+/.test(payload.email)) {
    error.push("Email is invalid. \n");
  }

  if (error.length > 0) {
    showMessage({ message: error.toString() });

    return;
  } else {
    return true;
  }
};

export const storeUserTokenAndLoggedInStatus =  (data: string) => {
   saveToSecureStorage("userToken", data);
   saveToSecureStorage("signedInStatus", "true");
   showMessage({ message: "Success" });
};

export const signInUserWithBackendAuthApi = (
  payload: LoginPayload,
  navigation: any
) => {
  fetch(`${process.env.EXPO_PUBLIC_BACKEND_URL}/auth/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "69420",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      storeUserTokenAndLoggedInStatus(data);

      setTimeout(() => {
        navigateToWelcome(navigation);
      }, 2000);
    })
    .catch((error) => {
      showMessage({ message: "error " + error });
    });
};

export const findUserDetailsFromBackendAPI = (
  userId: string,
  dispatch: any
) => {
  fetch(`${process.env.EXPO_PUBLIC_BACKEND_URL}/auth/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "69420",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(setUserDetails(data));
    })
    .catch((error) => {
      showMessage({ message: "error " + error });
    });
};
