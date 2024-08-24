import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { homeStyle } from "../styles/homeStyle";
import { useNavigation } from "@react-navigation/native";

// add see more pressable

export default function ItemShowSlide() {
  const itemName = "Hamburgerrrrr";
  const price = "$50";
  const navigation = useNavigation()
  return (
    <View style={homeStyle.itemShowSlideStyle}>
      <ScrollView
        horizontal={true}
        style={homeStyle.showRoom}
        showsHorizontalScrollIndicator={false}
      >
        <Pressable style={homeStyle.eachShowRoom} onPress={()=>{
          navigation.navigate("ItemDescriptionScreen" as never)

        }}>
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
