import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const navigation = useNavigation();
  const navigateToWelcome = () => {
    navigation.navigate("Welcome" as never);
  };

  const validateForm = () => {
    const error: string[] = [];
    if (!fullName) {
      error.push("Full Name is Required \n");
    }

    if (!password) {
      error.push("Password is Required  \n");
    } else if (password.length < 6) {
      error.push("Password must be at least 6 characters. \n");
    }
    if (!email) {
      error.push("Email is Required \n");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.push("Email is invalid. \n");
    }
    if (password != confirmedPassword) {
      error.push("Password not matching \n");
    }

    if (error.length > 0) {
      setErrors(error);

      showMessage({ message: error.toString() });

      return;
    }

    setIsFormValid(true);
  };

  const submitHandler = () => {
    const payload = {
      email,
      fullName,
      password,
      confirmedPassword,
    };

    validateForm();
    if (isFormValid === true) {
      navigateToWelcome();
    }
  };

  return (
    <View style={styles.container}>
      <Text>Orderr is the way to Order</Text>
      <Text style={styles.bold}>Sign Up</Text>

      <label>Email</label>
      <TextInput
        style={styles.inputStyle}
        onChangeText={setEmail}
        textContentType="emailAddress"
      />
      <label>Full name</label>
      <TextInput
        style={styles.inputStyle}
        onChangeText={setFullName}
        textContentType="name"
      />
      <label>Password</label>
      <TextInput
        style={styles.inputStyle}
        onChangeText={setPassword}
        textContentType="password"
      />
      <label> Confirm Password</label>
      <TextInput
        style={styles.inputStyle}
        onChangeText={setConfirmedPassword}
        textContentType="password"
      />
      <Button title="Submit" color={"#FB8B24"} onPress={submitHandler} />
      <FlashMessage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
    fontStyle: "italic",
  },
  bold: {
    fontSize: 30,
  },
  inputStyle: {
    height: 30,
    width: 300,
    borderColor: "black",
    borderStyle: "dashed",
    backgroundColor: "white",
  },
});
