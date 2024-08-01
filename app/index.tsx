import { Text, StyleSheet, View } from "react-native";
import SplashScreen from "@/components/splashScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "@/components/authComponent";
import WelcomeScreen from "@/components/welcomeScreen";
import { Provider } from "react-redux";
import { store } from "@/components/reduxStore";

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
    </Provider>
  );
}
