import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  Pressable,
  TextInput,
} from "react-native";
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
                    padding: 5,
                  }}
                >
                  Open Voucher
                </Text>
              </Pressable>
            </View>
            <Image
              style={homeStyle.imageInSmallerContainer}
              source={require("../assets/ham.png")}
            />
          </View>
        </View>
        <View style={homeStyle.searchBox}>
          <TextInput
            placeholder=" ⌕ search dishes and restuarants"
            style={{ height: 17 }}
          ></TextInput>
        </View>
        <View style={homeStyle.navSearchBox}>
          <Pressable>
            <Text style={{ padding: 5, color: "#565656" }}>foods</Text>
          </Pressable>
          <Pressable>
            <Text style={{ padding: 5, color: "#565656" }}>drinks</Text>
          </Pressable>
          <Pressable>
            <Text style={{ padding: 5, color: "#565656" }}>sauce</Text>
          </Pressable>
          <Pressable>
            <Text style={{ padding: 5, color: "#565656" }}>snacks</Text>
          </Pressable>
          <Pressable>
            <Text style={{ padding: 5, color: "#565656" }}>stores</Text>
          </Pressable>
        </View>

        <View style={homeStyle.showRoom}>
          <ScrollView></ScrollView>
          <View style={homeStyle.eachShowRoom}>
            <Image
              source={require("../assets/first.png")}
              style={{ height: 93.96, width: 93.96 }}
            />
            <Text style={{}}>Hamburger</Text>
          </View>
          <View style={homeStyle.eachShowRoom}>
            <Image
              source={require("../assets/first.png")}
              style={{ height: 93.96, width: 93.96 }}
            />
            <Text style={{}}>Hamburger</Text>
          </View>
          <View style={homeStyle.eachShowRoom}>
            <Image
              source={require("../assets/first.png")}
              style={{ height: 93.96, width: 93.96 }}
            />
            <Text style={{}}>Hamburger</Text>
          </View>
        </View>
      </View>

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
