import { Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { splashStyle } from "../styles/splashStyle";
import { checkUserSignInStatusAndNavigate } from "../utilities/userChecker";
import { useDispatch } from "react-redux";



export default function SplashScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch()


  useEffect(() => {
    setTimeout(() => {
      checkUserSignInStatusAndNavigate(dispatch,navigation);
    }, 2000);
  });

  return (
    <View style={splashStyle.container}>
      <Text style={splashStyle.logoText}>Orderr</Text>
    </View>
  );
}
