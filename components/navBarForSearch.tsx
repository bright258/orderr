import { View, Pressable, Text } from "react-native";
import { homeStyle } from "../styles/homeStyle";

export default function NavBarForSearch() {
  return (
    <View style={homeStyle.navSearchBox}>
      <Pressable>
        <Text style={homeStyle.navBar}>foods</Text>
      </Pressable>
      <Pressable>
        <Text style={homeStyle.navBar}>drinks</Text>
      </Pressable>
      <Pressable>
        <Text style={homeStyle.navBar}>sauce</Text>
      </Pressable>
      <Pressable>
        <Text style={homeStyle.navBar}>snacks</Text>
      </Pressable>
      <Pressable>
        <Text style={homeStyle.navBar}>stores</Text>
      </Pressable>
    </View>
  );
}
