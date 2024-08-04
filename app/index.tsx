import { Text, StyleSheet, View } from "react-native";
import SplashScreen from "@/components/splashScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "@/components/authComponent";
import WelcomeScreen from "@/components/welcomeScreen";
import { Provider } from "react-redux";
import { store } from "@/components/reduxStore";
import LoginComponent from "@/components/loginComponent";
import FlashMessage from "react-native-flash-message";
import HomeScreen from "@/components/homeScreen";

// A lot of error handling needed

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Provider store={store}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: "modal",
        }}
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerBackTitleVisible: false, headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerBackTitleVisible: false, headerShown: false }}
        />

        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerBackTitleVisible: false, headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginComponent}
          options={{ headerBackTitleVisible: false, headerShown: false }}
        />

        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerBackTitleVisible: false, headerShown: false }}
        />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </Provider>
  );
}
