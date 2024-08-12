import React, { useEffect } from "react";
import { View, Text, Button, ScrollView, Image, Pressable } from "react-native";
import { preventUserFromGoingBackOnPressingBackButton } from "../utilities/userTasks";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { combineReducers } from "@reduxjs/toolkit";
import { homeStyle } from "../styles/homeStyle";
import { getUserTokenAndRetreiveUserInfo } from "../utilities/tokens/userAuthTokens";
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
    getUserTokenAndRetreiveUserInfo(dispatch, navigation);
  }, []);

  return (
    <View style={homeStyle.container}>
      {/* <Text>
        Welcome {userInfo?.fullName}, {userInfo?.email}
      </Text> */}

      <Text style={homeStyle.boldText}>{` Delicious\n Food For you`}</Text>
      <View style={homeStyle.newContainer}>
        <View style={homeStyle.smallerContainer}>
          <View style={homeStyle.newView}>
            <View>
              <Text style={homeStyle.smallerText}> Get special discount</Text>

              <Text style={homeStyle.biggerText}>{`Up to 50%`}</Text>
              <Pressable style={homeStyle.voucherButton}>
                <Text
                  style={{
                    color: "#FF9F0D",
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    fontSize: 15,
                    padding: 5
                   
                  }}
                >
                  Open Voucher
                </Text>
              </Pressable>
            </View>
            <Image
              style={homeStyle.imageInSmallerContainer}
              source={require("../assets/hamburgerOne.png")}
            />
          </View>
        </View>
      </View>

      {/* <ScrollView>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </ScrollView> */}

      <Text>Top picks of the day</Text>

      {/* <Button
        title="log out"
        color={"#FF9F0D"}
        onPress={() => {
          navigation.navigate("SignUp" as never);
        }}
      /> */}
    </View>
  );
}
