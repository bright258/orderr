import SplashScreen from "./components/splashScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUpScreen from "./components/signUpScreen";
import HomeScreen from "./components/homeScreen";
import SignInScreen from "./components/signInScreen";
import FlashMessage from "react-native-flash-message";
import WelcomeScreen from "./components/welcomeScreen";
import { Provider } from "react-redux";
import { store } from "./utilities/reduxStore";
import ItemShowSlide from "./components/itemShowSlide";
import ItemDescriptionScreen from "./components/itemDescriptionScreen"

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Provider store={store}>
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

          <Stack.Screen
            name="Login"
            component={SignInScreen}
            options={{ headerBackTitleVisible: false, headerShown: false }}
          />

          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerBackTitleVisible: false, headerShown: false }}
          />
          <Stack.Screen
            name="ItemShowSlide"
            component={ItemShowSlide}
            options={{ headerBackTitleVisible: false, headerShown: false }}
          />
          <Stack.Screen
            name="ItemDescriptionScreen"
            component={ItemDescriptionScreen}
            options={{ headerBackTitleVisible: false, headerShown: true, headerTitle: '', headerTransparent: true }}
          />
        </Stack.Navigator>
        <FlashMessage position="top" />
      </NavigationContainer>
    </Provider>
  );
}
