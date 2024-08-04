import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { useState, useEffect } from "react";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isBackendAuthenticated, setIsBackendAuthenticated] = useState(false);

  const navigation = useNavigation();
  const navigateToLoginScreen = () => {
    navigation.navigate("Login" as never);
  };

  const payload = {
    email,
    fullName,
    password,
  };

  useEffect(() => {
    if (isFormValid === true) {
      showMessage({ message: "Loading..." });
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
            navigateToLoginScreen();
          }, 3000);
        })
        .catch((e) => {
          showMessage({ message: "error " + e });
        });
    }
  }, [isFormValid]);

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
    setIsLoading(true);
  };

  const submitHandler = () => {
    validateForm();
  };

  return (
    <View style={styles.container}>
      <Text>Orderr is the way to Order</Text>
      <Text style={styles.bold}>Sign Up</Text>

      <Text>Email</Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={setEmail}
        textContentType="emailAddress"
      />
      <Text>Full name</Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={setFullName}
        textContentType="name"
      />
      <Text>Password</Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={setPassword}
        textContentType="password"
        secureTextEntry={true}
      />
      <Text> Confirm Password</Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={setConfirmedPassword}
        textContentType="password"
        secureTextEntry={true}
      />
      <Button title="Submit" color={"#FB8B24"} onPress={submitHandler} />

      <Button
        title="Already signed up? login"
        color={"#FB8B24"}
        onPress={() => {
          navigateToLoginScreen();
        }}
      />
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
