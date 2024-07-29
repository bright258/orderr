import React from "react";
import { View, Text } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { useNavigation } from "@react-navigation/native";
export default function StatusBar() {
  const navigation = useNavigation();
  const navigateToAuth = () => {
    console.log("done");
    navigation.navigate('Home' as never);
  };
  return (
    <View style={{ alignItems: "center", marginTop: 100 }}>
      <CircularProgress
        value={100}
        radius={30}
        activeStrokeColor="#0802A3"
        onAnimationComplete={navigateToAuth}
        duration={3000}
      />
    </View>
  );
}
