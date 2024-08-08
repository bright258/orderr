import { Text, StyleSheet, View } from "react-native";
import SplashScreen from "./components/splashScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUpScreen from "./components/signUpScreen";
import HomeScreen from "./components/homeScreen";
// import LoginComponent from "./components/signInScreen";
import FlashMessage from "react-native-flash-message";


const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerBackTitleVisible: false, headerShown: false }}
        />
       <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerBackTitleVisible: false, headerShown: false }}
        /> 

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerBackTitleVisible: false, headerShown: false }}
        />

        {/* <Stack.Screen
          name="Login"
          component={LoginComponent}
          options={{ headerBackTitleVisible: false, headerShown: false }}
        /> */}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}
