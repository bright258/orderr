import { Pressable, ScrollView, View, Image, Text } from "react-native";
import { homeStyle } from "../styles/homeStyle";

export default function ItemDiscountSlide() {
  const itemName = "Hamburgerrrrr";
  const price = "$50";
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
          <View style={{ marginTop: 15 }}>
            <Text style={{}}>
              {itemName.length > 8
                ? `${itemName.substring(0, 9)}...`
                : itemName}
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text>{price}</Text>
              <Text style={{ color: "#FF9F0D", fontSize: 14 }}>
                {"     "} order
              </Text>
            </View>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
}
