import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { combineReducers } from "@reduxjs/toolkit";
const rootReducer = combineReducers({});
export type IRootState = ReturnType<typeof rootReducer>;

export default function HomeScreen() {
  const userInfo = useSelector((state: IRootState) => state.issue.userDetails);

  return (
    <View>
      <Text>Welcome {userInfo.fullName}</Text>
    </View>
  );
}
