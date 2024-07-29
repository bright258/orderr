import { Text, View, StyleSheet } from "react-native";
import React from "react";
import StatusBar from "@/components/statusBar";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 100, color: "white" }}>Orderr</Text>
      <StatusBar   />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FB8B24",
      marginTop: -4,
      
    },
  });