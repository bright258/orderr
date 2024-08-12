import { StyleSheet } from "react-native";

export const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    fontStyle: "italic",
    marginTop: 50,
    marginLeft: 7,
    marginRight: 7,
  },
  boldText: {
    fontSize: 25,
    color: "#362B19",
  },
  smallerText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginLeft: -3.7,
  },
  biggerText: {
    fontSize: 37,
    fontWeight: "bold",
    color: "white",
  },

  inputStyle: {
    height: 30,
    width: 300,
    borderColor: "black",
    borderStyle: "dashed",
    backgroundColor: "white",
  },
  newContainer: {
    height: 137.5,
    width: 295,
    backgroundColor: "#FF9F0D",
    marginLeft: 5,
    marginTop: 24,
    marginRight: 50,
    borderRadius: 12,
  },

  newView: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  smallerContainer: {
    marginLeft: 10,
  },

  imageInSmallerContainer: {
    height: 200,
    width: 100,
    marginTop: -45
    
  },
  voucherButton:{
    backgroundColor: "white",
    height: 30,
    width: 115,
    borderRadius: 52
  },
  searchBox:{
    backgroundColor: "#ffff",
    width: 295,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    marginTop: 15
  },
  navSearchBox:{
    backgroundColor: "#ffff",
    width: 295,
    height: 30,
    borderRadius: 8,
    justifyContent: "center",
    marginTop: 15,
    flexDirection: "row",
    flexWrap: "wrap",
  
  },
  showRoom: {
    height: 181.98,
    width: 409.97,
    marginTop: -0.5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  eachShowRoom:{
    width: 125.91,
    height: 181.98,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    
  }


});
