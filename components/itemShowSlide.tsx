import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { homeStyle } from "../styles/homeStyle";

export default function ItemShowSlide() {
  return (
    <View style={homeStyle.itemShowSlideStyle}>
      <ScrollView
        horizontal={true}
        style={homeStyle.showRoom}
        showsHorizontalScrollIndicator={false}
      >
        <Pressable style={homeStyle.eachShowRoom}>
          <Image
            source={require("../assets/first.png")}
            style={{ height: 75.96, width: 70.96 }}
          />
          <Text style={{}}>Hamburger</Text>
        </Pressable>
        <Pressable style={homeStyle.eachShowRoom}>
          <Image
            source={require("../assets/first.png")}
            style={{ height: 75.96, width: 70.96 }}
          />
          <Text style={{}}>Hamburger</Text>
        </Pressable>
        
      </ScrollView>
    </View>
  );
}
