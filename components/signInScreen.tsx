import React, { useState, useEffect } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
// import FlashMessage, { showMessage } from "react-native-flash-message";
// import { useDispatch } from "react-redux";
// import { setUserInformation, setUserLoggedIn } from "./reduxFile";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
//   const dispatch = useDispatch();

  const navigation = useNavigation();
  const navigateToWelcome = () => {
    navigation.navigate("Welcome" as never);
  };
  const navigateToAuth = () => {
    navigation.navigate("Auth" as never);
  };

  const payload = {
    email,
    password,
  };

  useEffect(() => {
    if (isFormValid === true) {
    //   showMessage({ message: "Loading..." });
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
        //   dispatch(setUserInformation(data));

        //   showMessage({ message: "Success" });
        //   dispatch(setUserLoggedIn(true));

         

          setTimeout(() => {
            navigateToWelcome();
          }, 2000);
        })
        .catch((e) => {
        //   showMessage({ message: "error " + e });
          console.log(e.message)
        });
    }
  }, [isFormValid]);

  const validateForm = () => {
    const error: string[] = [];

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

    if (error.length > 0) {
    //   showMessage({ message: "ehllo" });
      setErrors(error);

    //   showMessage({ message: error.toString() });

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
      <Text>Orderr is your power to Order</Text>
      <Text style={styles.bold}>Sign In</Text>

      <Text>Email</Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={setEmail}
        textContentType="emailAddress"
      />

      <Text>Password</Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={setPassword}
        textContentType="password"
        secureTextEntry={true}
      />

      <Button title="Submit" color={"#FB8B24"} onPress={submitHandler} />
      <Button
        title="Not Signed up yet? register"
        color={"#FB8B24"}
        onPress={() => {
          navigateToAuth();
        }}
      />
      {/* <FlashMessage /> */}
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
