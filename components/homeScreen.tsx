import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import {
  findUserDetailsFromBackendAPI,
  preventUserFromGoingBackOnPressingBackButton,
} from "../utilities/userTasks";
import { useNavigation } from "@react-navigation/native";

import { useSelector } from "react-redux";
import { combineReducers } from "@reduxjs/toolkit";
// Do stuff


const rootReducer = combineReducers({});
export type IRootState = ReturnType<typeof rootReducer>;

export default function HomeScreen() {
  preventUserFromGoingBackOnPressingBackButton();
  const navigation = useNavigation();

  const userInfo = useSelector((state: IRootState) => state.issue.userDetails);
  // useEffect(() => {
  //   console.log("djdjdj", userInfo);
  // });

  return (
    <View>
      <Text>Welcome {userInfo.fullName}</Text>

      <Text>Restaurants near you</Text>
      <Text>Top picks of the day</Text>

      <Button title="log out" color={"#FB8B24"} onPress={() => {}} />
    </View>
  );
}
