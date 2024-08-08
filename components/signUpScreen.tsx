import { Text, View, TextInput, Button } from "react-native";
import { useEffect, useState } from "react";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { signUpStyles } from "../styles/signUpStyle";
import {
  preventUserFromGoingBackOnPressingBackButton,
  signUpUserWithBackendAuthApi,
  validateUserEntryIntoSignUpForm,
  navigateToLoginScreen,
} from "../utilities/userTasks";
import { useNavigation } from "@react-navigation/native";
import { FormValdationPayload, UserSignUpPayload } from "../utilities/userConstants";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigation = useNavigation();
  const payload: UserSignUpPayload = {
    email,
    fullName,
    password,
  };
  const formValidationPayload: FormValdationPayload = {
    email,
    password,
    fullName,
    confirmedPassword,
  };



  preventUserFromGoingBackOnPressingBackButton();
  const submitHandler = () => {
    const validateForm = validateUserEntryIntoSignUpForm(formValidationPayload);
    if (validateForm === true) {
      setIsFormValid(true);
    }
  };

  useEffect(() => {
    if (isFormValid === true) {
      showMessage({ message: "Loading..." });
      signUpUserWithBackendAuthApi(payload);
    } else {
      console.log("nOt caliod");
    }
  }, [isFormValid, submitHandler]);

  

  return (
    <View style={signUpStyles.container}>
      <Text>Orderr is the way to Order</Text>
      <Text style={signUpStyles.boldText}>Sign Up</Text>

      <Text>Email</Text>
      <TextInput
        style={signUpStyles.inputStyle}
        onChangeText={setEmail}
        textContentType="emailAddress"
      />
      <Text>Full name</Text>
      <TextInput
        style={signUpStyles.inputStyle}
        onChangeText={setFullName}
        textContentType="name"
      />
      <Text>Password</Text>
      <TextInput
        style={signUpStyles.inputStyle}
        onChangeText={setPassword}
        textContentType="password"
        secureTextEntry={true}
      />
      <Text> Confirm Password</Text>
      <TextInput
        style={signUpStyles.inputStyle}
        onChangeText={setConfirmedPassword}
        textContentType="password"
        secureTextEntry={true}
      />
      <Button title="Submit" color={"#FB8B24"} onPress={submitHandler} />

      <Button
        title="Already signed up? login"
        color={"#FB8B24"}
        onPress={() => {
          navigateToLoginScreen(navigation);
        }}
      />
      <FlashMessage />
    </View>
  );
}
