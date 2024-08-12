import { showMessage } from "react-native-flash-message";
import { LoginPayload } from "../userConstants";

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