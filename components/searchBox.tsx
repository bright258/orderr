import { TextInput, View } from "react-native";
import { homeStyle } from "../styles/homeStyle";

export default function SearchBox (){
    return (
        <View style={homeStyle.searchBox}>
        <TextInput
          placeholder=" ⌕ search dishes and restuarants"
          style={{ height: 17 }}
        ></TextInput>
      </View>
    )
}