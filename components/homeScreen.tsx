import React, { useEffect } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import {
  findUserDetailsFromBackendAPI,
  getUserTokenAndRetreiveUserInfo,
  preventUserFromGoingBackOnPressingBackButton,
} from "../utilities/userTasks";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { combineReducers } from "@reduxjs/toolkit";
import { homeStyle } from "../styles/homeStyle";
// Do stuff
// handle expired token, check that navigates back to splash screen, sets loggedIn status to false

const rootReducer = combineReducers({});
export type IRootState = ReturnType<typeof rootReducer>;

export default function HomeScreen() {
  preventUserFromGoingBackOnPressingBackButton();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userInfo = useSelector((state: IRootState) => state.issue.userDetails);

  useEffect(() => {
    getUserTokenAndRetreiveUserInfo(dispatch);
  });

  return (
    <View style={homeStyle.container}>
      <Text>
        Welcome {userInfo.fullName}, {userInfo.email}
      </Text>

      <Text>Restaurants near you</Text>

      <ScrollView>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </ScrollView>

      <Text>Top picks of the day</Text>

      <Button
        title="log out"
        color={"#FB8B24"}
        onPress={() => {
          navigation.navigate("SignUp" as never);
        }}
      />
    </View>
  );
}
