import { Text, View, StyleSheet } from "react-native";
import SplashScreen from "@/components/splashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "@/components/authComponent";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator screenOptions={{
     
      
    }}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerBackTitleVisible: false, headerShown: false }}
        
      />
      <Stack.Screen
        name="Home"
        component={Auth}
        options={{ headerBackTitleVisible: false, headerShown: false }}
      />
    </Stack.Navigator>
  );
}
