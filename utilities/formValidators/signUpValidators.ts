import { showMessage } from "react-native-flash-message";
import { FormValidationPayload } from "../userConstants";

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
    if (payload.password !== payload.confirmedPassword) {
      error.push("Password not matching \n");
    }
  
    if (error.length > 0) {
      showMessage({ message: error.toString() });
  
      return;
    } else {
      return true;
    }
  };