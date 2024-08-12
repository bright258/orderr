import { BackHandler } from "react-native";
import { backAction } from "./backHandler";


export const preventUserFromGoingBackOnPressingBackButton = () => {
  BackHandler.addEventListener("hardwareBackPress", backAction);
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








// export const deleteUserState = (data: string) => {
//   saveToSecureStorage("userToken", data);
//   saveToSecureStorage("signedInStatus", "true");
//   showMessage({ message: "Success" });
// };
