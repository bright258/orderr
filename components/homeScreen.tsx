import React, {useEffect} from "react";
import { View, Text } from "react-native";
import { findUserDetailsFromBackendAPI, preventUserFromGoingBackOnPressingBackButton } from "../utilities/userTasks";
import { getValueFromSecureStorage } from "../utilities/getFromSecureStorage";
import JWT from "expo-jwt";
// import { useSelector } from "react-redux";
// import { combineReducers } from "@reduxjs/toolkit";
//   dispatch(setUserLoggedIn(true));
  
//   dispatch(setUserInformation(data));
import { useDispatch } from "react-redux";
// import { setUserInformation, setUserLoggedIn } from "./reduxFile";
// const rootReducer = combineReducers({});
// export type IRootState = ReturnType<typeof rootReducer>;
// import { combineReducers } from "@reduxjs/toolkit";

// const rootReducer = combineReducers({});
// export type IRootState = ReturnType<typeof rootReducer>;

export default function HomeScreen() {
  preventUserFromGoingBackOnPressingBackButton();
  const dispatch = useDispatch();
  //   const userInfo = useSelector((state: IRootState) => state.issue.userDetails);
  useEffect(() => {
    console.log("ksk")
    getValueFromSecureStorage("userToken").then((token) => {
      console.log(token, "kdkdkd")
      const userId = JWT.decode(token!, process.env.EXPO_PUBLIC_JWT_KEY!).sub;
      console.log("Welcommmmmmmmmmmme", userId); 
      findUserDetailsFromBackendAPI(userId!, dispatch);
    });
  });

  return (
    <View>
      <Text>Welcome </Text>

      <Text>Restaurants near you</Text>
      <Text>Top picks of the day</Text>
    </View>
  );
}
