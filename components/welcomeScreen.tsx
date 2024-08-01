import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { combineReducers } from "@reduxjs/toolkit";
const rootReducer = combineReducers({});
export type IRootState = ReturnType<typeof rootReducer>;

export default function WelcomeScreen() {
  const userInfo = useSelector((state: IRootState) => state.issue.user);
  console.log(userInfo);

  return (
    <Text>Hello, {userInfo.fullName}. Order your way to a better life</Text>
  );
}
