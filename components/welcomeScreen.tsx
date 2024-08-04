import React, { useEffect } from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import { UseDispatch, useSelector } from "react-redux";
import { combineReducers } from "@reduxjs/toolkit";
import { useNavigation } from "expo-router";
import JWT from "expo-jwt";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import {setUserDetails} from "./reduxFile";

const rootReducer = combineReducers({});
export type IRootState = ReturnType<typeof rootReducer>;

export default function WelcomeScreen() {
  const userInfoToken = useSelector(
    (state: IRootState) => state.issue.user.access_token
  );

 
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfoToken) {
      const userId = JWT.decode(
        userInfoToken,
        process.env.EXPO_PUBLIC_JWT_KEY!
      ).sub;
      AsyncStorage.setItem("user", userId!);
      AsyncStorage.setItem("loggedInStatus", JSON.stringify(true));

      fetch(`${process.env.EXPO_PUBLIC_BACKEND_URL}/auth/${userId}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(setUserDetails(data));
        })
        .catch((e) => {
          console.log(e);
        });

    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        {`Hello, Order your way to a better life  \n`}{" "}
      </Text>
      <Text>{`Welcome to the delivery app of the future  \n`}</Text>
      <Image
        style={styles.imageStyle}
        source={require("@/assets/images/deliveryOne.jpg")}
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

const styles = StyleSheet.create({
  imageStyle: {
    height: 300,
    width: 300,
    borderRadius: 150,
    margin: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
    fontStyle: "italic",
  },

  textStyle: {
    fontWeight: "bold",
    margin: 20,
  },
});
