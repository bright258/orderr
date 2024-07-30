import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, SetIsFormValid] = useState(false);

  const submitHandler = () => {
    const payload = {
      email,
      fullName,
      password,
      confirmedPassword,
    };


    const validateForm = () => {
      type ErrorType = {
        password?: string;
        fullName?: string;
        email?: string;
        confirmedPassword?: string;
      };
      const error: ErrorType = {
        password: "",
        fullName: "",
        email: "",
        confirmedPassword: "",
      };
      if (!fullName) {
        console.log("heat")
        error.fullName = "Full Name is Required";

        // setErrors(error);

        // showMessage({ message: error.fullName, statusBarHeight: 1 });
      }

      if (!password) {
        error.password = "Password is Required";
        // setErrors(error);

        // showMessage({ message: error.password, statusBarHeight: 1 });
      } else if (password.length < 6) {
        error.password = "Password must be at least 6 characters.";
      }
      if (!email) {
        error.email = "Email is Required";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        error.email = "Email is invalid.";
      }
      if (password != confirmedPassword) {
        error.confirmedPassword = "Password not matching";
      }

      setErrors(error);

      showMessage({ message: error.toString() });
    };
    validateForm();


  };

  return (
    <View style={styles.container}>
      <Text>Orderr is the way to Order</Text>
      <Text style={styles.bold}>Sign Up</Text>

      <label>Email</label>
      <TextInput style={styles.inputStyle} onChangeText={setEmail} />
      <label>Full name</label>
      <TextInput style={styles.inputStyle} onChangeText={setFullName} />
      <label>Password</label>
      <TextInput style={styles.inputStyle} onChangeText={setPassword} />
      <label> Confirm Password</label>
      <TextInput
        style={styles.inputStyle}
        onChangeText={setConfirmedPassword}
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
    // marginTop: -500,
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
