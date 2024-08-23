import { View, Text, Pressable, Image } from "react-native";
import { homeStyle } from "../styles/homeStyle";

export default function HeroSectionOnHomeScreen() {
  return (
    <View style={homeStyle.heroContainer}>
      <View style={homeStyle.containerForImageAndHeroText}>
        <View>
          <Text style={homeStyle.mediumHeroText}> Get special discount</Text>
          <Text style={homeStyle.bigHeroText}>{`Up to 50%`}</Text>
          <Pressable style={homeStyle.voucherButton}>
            <Text style={homeStyle.voucherBlurb}>Open Voucher</Text>
          </Pressable>
        </View>
        <Image
          style={homeStyle.imageInSmallerContainer}
          source={require("../assets/ham.png")}
        />
      </View>
    </View>
  );
}
