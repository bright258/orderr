import React, { useEffect } from "react";
import { Text, View, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import JWT from "expo-jwt";
import { useDispatch } from "react-redux";
import { getValueFromSecureStorage } from "../utilities/getFromSecureStorage";
import {
  findUserDetailsFromBackendAPI,
  preventUserFromGoingBackOnPressingBackButton,
} from "../utilities/userTasks";
import { welcomeScreenStyle } from "../styles/welcomeStyle";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  preventUserFromGoingBackOnPressingBackButton();

  useEffect(() => {
    getValueFromSecureStorage("userToken").then((token) => {
      console.log(token);
      const userId = JWT.decode(token!, process.env.EXPO_PUBLIC_JWT_KEY!).sub;
      console.log("Welcommmmmmmmmmmme", userId);
      findUserDetailsFromBackendAPI(userId!, dispatch);
    });
  });

  return (
    <View style={welcomeScreenStyle.container}>
      <Text style={welcomeScreenStyle.textStyle}>
        {`Hello, Order your way to a better life  \n`}{" "}
      </Text>
      <Text>{`Welcome to the delivery app of the future  \n`}</Text>
      <Image
        style={welcomeScreenStyle.imageStyle}
        source={require("../assets/deliveryOne.jpg")}
      />
      <Text>We priotise convienience and speed</Text>
      <Text>Order like a boss today</Text>
      <Button
        title="Continue"
        color={"#FB8B24"}
        onPress={() => {
          navigation.navigate("Home" as never);
        }}
      />
    </View>
  );
}
