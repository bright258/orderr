import React from "react";
import { View, Text } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { useNavigation } from "@react-navigation/native";
export default function StatusBar() {
  const navigation = useNavigation();
  const navigateToAuth = () => {
    console.log("done");
    navigation.navigate('Auth' as never);
    navigation.addListener('beforeRemove', ()=>{console.log("done")})
  };
  return (
    <View style={{ alignItems: "center", marginTop: 100 }}>
      <CircularProgress
        value={100}
        radius={30}
        activeStrokeColor="white"
        onAnimationComplete={navigateToAuth}
        duration={3000}
        
      />
    </View>
  );
}
