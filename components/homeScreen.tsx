import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { preventUserFromGoingBackOnPressingBackButton } from "../utilities/userTasks";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { combineReducers } from "@reduxjs/toolkit";
import { homeStyle } from "../styles/homeStyle";
import { getUserTokenAndRetreiveUserInfo } from "../utilities/tokens/userAuthTokens";
import ItemShowSlide from "./itemShowSlide";
import NavBarForSearch from "./navBarForSearch";
import SearchBox from "./searchBox";
import HeroSectionOnHomeScreen from "./heroOnHomeScreen";
import ItemDiscountSlide from "./discountSlide";
import { ScrollView } from "react-native";

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={homeStyle.boldText}>{` Delicious\n Food For you`}</Text>
        <View>
          <HeroSectionOnHomeScreen />
          <SearchBox />
          <NavBarForSearch />
          <ItemShowSlide />
          <Text style={{color: "#362B19", marginLeft: 5}}>Hottest Discounts</Text>
          <ItemDiscountSlide />
        </View>
      </ScrollView>
    </View>
  );
}
