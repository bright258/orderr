import React, { useState, useEffect } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";
import { signInStyles } from "../styles/signInStyle";
import {
  navigateToSignUp,
  preventUserFromGoingBackOnPressingBackButton,
} from "../utilities/userTasks";
import { LoginPayload } from "../utilities/userConstants";
import { signInUserWithBackendAuthApi } from "../utilities/userHttpRequests/userAuthRequests";
import { validateUserEntryIntoSignInForm } from "../utilities/formValidators/signInValidators";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const navigation = useNavigation();

  const payload: LoginPayload = {
    email,
    password,
  };

  const setEmailCustomFunction = (inputedEmail: string) => {
    setEmail(inputedEmail.toLowerCase());
  };

  preventUserFromGoingBackOnPressingBackButton();

  const submitHandler = () => {
    const validateForm = validateUserEntryIntoSignInForm(payload);
    if (validateForm === true) {
      setIsFormValid(true);
    }
    if (isFormValid === true) {
      showMessage({ message: "Loading..." });
      signInUserWithBackendAuthApi(payload, navigation);
    }
    return;
  };

  return (
    <View style={signInStyles.container}>
      <Text>Orderr is your power to Order</Text>
      <Text style={signInStyles.bold}>Sign In</Text>

      <Text>Email</Text>
      <TextInput
        style={signInStyles.inputStyle}
        onChangeText={setEmailCustomFunction}
        textContentType="emailAddress"
      />

      <Text>Password</Text>
      <TextInput
        style={signInStyles.inputStyle}
        onChangeText={setPassword}
        textContentType="password"
        secureTextEntry={true}
      />

      <Button title="Submit" color={"#FB8B24"} onPress={submitHandler} />
      <Button
        title="Not Signed up yet? register"
        color={"#FB8B24"}
        onPress={() => {
          navigateToSignUp(navigation);
        }}
      />
    </View>
  );
}
