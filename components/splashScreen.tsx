import { Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { splashStyle } from "../styles/splashStyle";
import { checkUserSignInStatusAndNavigate } from "../utilities/userTasks";

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      checkUserSignInStatusAndNavigate(navigation);
    }, 2000);
  });

  

  return (
    <View style={splashStyle.container}>
      <Text style={splashStyle.logoText}>Orderr</Text>
    </View>
  );
}
