import React, { useEffect } from "react";
import { Text, View, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import JWT from "expo-jwt";
import { useDispatch } from "react-redux";
import { getValueFromSecureStorage } from "../utilities/getFromSecureStorage";
import {
  preventUserFromGoingBackOnPressingBackButton,
} from "../utilities/userTasks";
import { welcomeScreenStyle } from "../styles/welcomeStyle";
import {getUserTokenAndRetreiveUserInfo} from "../utilities/tokens/userAuthTokens"

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  preventUserFromGoingBackOnPressingBackButton();

  // [] empty array to run it once
  // navigate type
  useEffect(() => {
    getUserTokenAndRetreiveUserInfo(dispatch, navigation)
   
  }, []);

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
      <Text>We prioritise convienience and speed</Text>
      <Text>Order like a boss today</Text>
      <Button
        title="Continue"
        color={"#FF9F0D"}
        onPress={() => {
          navigation.navigate("Home" as never);
        }}
      />
    </View>
  );
}
