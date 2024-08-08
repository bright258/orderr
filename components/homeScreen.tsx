import React from "react";
import { View, Text } from "react-native";
// import { useSelector } from "react-redux";
// import { combineReducers } from "@reduxjs/toolkit";


// const rootReducer = combineReducers({});
// export type IRootState = ReturnType<typeof rootReducer>;

export default function HomeScreen() {
//   const userInfo = useSelector((state: IRootState) => state.issue.userDetails);


  return (
    <View>
      <Text>Welcome </Text>

      <Text>Restaurants near you</Text>
      <Text>Top picks of the day</Text>
    </View>
  );
}
