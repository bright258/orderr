import { Text, StyleSheet, View } from "react-native";
import SplashScreen from "@/components/splashScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "@/components/authComponent";
import WelcomeScreen from "@/components/welcomeScreen";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
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
        name="Auth"
        component={Auth}
        options={{ headerBackTitleVisible: false, headerShown: false }}
      />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerBackTitleVisible: false, headerShown: false }}
      />
      
    </Stack.Navigator>

  );
}
