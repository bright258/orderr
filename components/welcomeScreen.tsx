import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { combineReducers } from "@reduxjs/toolkit";
const rootReducer = combineReducers({});
export type IRootState = ReturnType<typeof rootReducer>;

export default function WelcomeScreen() {
  const userInfo = useSelector((state: IRootState) => state.issue.user);
  const log = useSelector((state: IRootState) => state.issue.isLoggedIn)
  const states = useSelector((state: IRootState) => state.issue)
 
  return (
    <Text>Hello, {userInfo.access_key}  Order your way to a better life {log} </Text>
  );
}
